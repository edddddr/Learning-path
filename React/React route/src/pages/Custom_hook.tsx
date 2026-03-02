import {useState, useEffect, createContext, useContext} from "react"

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




function usePokemon(){
    const [pokemon, setPokemon] = useState<Pokemon[]>([])

    useEffect(()=>{
        fetch("/pokemon.json").then((response) => response.json()).then((data) => setPokemon(data))
    }, [])

    return {pokemon}
}

const PokemonContext = createContext({pokemon: [] as Pokemon[]})

const PokimonList = ()=>{

  const {pokemon} = useContext(PokemonContext)
    
      return (<div>
        {pokemon.map(p => (
          <div key={p.id}>{p.name}</div>
        ))}
      </div>);
};



function Custom_hook(){

    return <>
    <PokemonContext.Provider value={usePokemon()}>
      <PokimonList/>
      </PokemonContext.Provider>
        </>

}


export default Custom_hook