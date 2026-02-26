import {useState, useEffect} from "react"

function UseRef_hook(){

    const [names, setName] = useState([])

    useEffect(()=> {
    fetch("/nameData.json").then((response) => response.json()).then((data) => setName(data))

    }, [])


    return <>

     <h5>Names: {names.join(", ")}</h5>
    </>
}


export default UseRef_hook;