import {useState, useEffect, createContext, useContext, useReducer, useCallback, useMemo} from "react"

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
  };
  sprite: string;
};


// custom hook
function usePokemonSource() : {
    pokemon:Pokemon[];
    search: string;
    setSearch: (search: string) => void;
}{
  
//   const [pokemon, setPokemon] = useState<Pokemon[]>([])
type PokimponState ={pokemon : Pokemon[]; search: string}
type PokimonAction = {type: "setPokemon"; payload:  Pokemon[]} |
                     {type: "setSearch"; payload:  string}

const [{pokemon, search}, dispatch] = useReducer((state: PokimponState, action : PokimonAction)=>{
    switch(action.type){
        case 'setPokemon':
            return {...state, pokemon: action.payload}
        case 'setSearch':
            return {...state, search: action.payload}
         default:
          return state;   
    }
}, {
    pokemon:[],
    search: "",
})

  useEffect(()=> {
    fetch("/pokemon.json").then((response) => response.json()).then(data => dispatch({
        type: "setPokemon",
        payload: data
    }))
  }, [])


  const setSearch = useCallback((search: string)=>{
    dispatch({
      type: "setSearch",
      payload: search
    })
  },[])


  const pokemonFilter = useMemo(()=> pokemon.filter((p)=> p.name.includes(search)), [pokemon, search])

  return {pokemon : pokemonFilter, search, setSearch}
}

// create context
const PokemonContext = createContext({pokemon: [] as Pokemon[], search:"", setSearch : (value: string) => {}})



// Instead of explistly define and to reduce redundacy
export function usePokimon(){

  return useContext(PokemonContext)
}



export function PokemonProvider({children,}:{ children : React.ReactNode }){

  return <>
    <>
    <PokemonContext.Provider value={usePokemonSource()}>
      {children}
    </PokemonContext.Provider>
    </>
  </>

}