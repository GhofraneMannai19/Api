import React , {useState, useEffect} from 'react';
import axios from 'axios';
function UserList(){
    const [user,setUser]=useState([])
    useEffect(() => 
    {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res)
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(
        <div>
            <ul>
               { user.map(user => {<li key={user.id}>{user.name}</li>}) }
            </ul>
        </div>
    );
}
export default UserList;