import { usePokimon, PokemonProvider } from "./store"
const PokemonList = ({})=>{
      const {pokemon} = usePokimon()


      console.log(pokemon.map((p)=> {}))

      return (<div>
        {pokemon.map((p)=> (
          <li key={p.id}>
            {p.name}
          </li>
        ))}
      </div>)

}

function SearchBox(){
  const {search, setSearch} = usePokimon()
  return <>
    <input placeholder="search"
           value={search}
           onChange={(e) => setSearch(e.target.value)}/>
  </>
}



function Custom_hook(){

  return <>
    <>
    <PokemonProvider>
      <SearchBox/>
      <PokemonList/>
    </PokemonProvider>
    </>
  </>

}


export default Custom_hook

