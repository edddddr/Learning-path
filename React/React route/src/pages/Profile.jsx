import {useParams} from 'react-router-dom'

function Profile(){
    const param = useParams()
    return<h1>Welcome {param.profile}</h1>
}


export default Profile