import  {useState, useMemo} from "react"

function UseMemo_hook(){
    const [names] = useState(["nemo", "poi", "aebe", "nameo"])

    const sortedname = useMemo(()=> [...names].sort(), [names])

    return <>
    <ul>    
        <li>unsorted: {names}</li>
        <li>sortedname: {sortedname.join(", ")}</li>
    </ul>
    </>
}


export default UseMemo_hook