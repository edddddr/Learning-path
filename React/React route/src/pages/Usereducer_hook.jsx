import {useReducer} from "react-router-dom"

function reducer(action, state){
    switch(action.type){
        case "increment":
            return {count : state.count  + 1}
        case "decrement":
            return {count : state.count  + 1}
        default:
            return {count : state.count}
    }
}

function Usereducer_hook(){
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const [names] = useState(["mon", "niwe", "hoie", "uiene"])
    
    const sortedName = useMemo(()=> names.sort(), [names])

    console.log(sortedName)


    


    

    function increment(){
        dispatch({type: "increment"})
    }


    return <>
    <button onChange={() => increment}>+</button>
    <div>{state.count}</div>
    <button>-</button>
    
    </>

}




export default Usereducer_hook

