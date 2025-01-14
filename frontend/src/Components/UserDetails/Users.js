import React, { useEffect, useState } from 'react'
import User from '../User/User'
import axios from "axios";

const URL="http://localhost:5000/users";

const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
}
function Users() {

 const [users,setUsers]=useState();
 useEffect(()=>{
  fetchHandler().then((data)=>setUsers(data.users))
 },[])

  return (
    <div>
      <h1>User Details Display Page</h1>
      <div>
        {users && users.map((user,i)=>
        (
          <div key={i}>
            <User user={user}/>
          </div>
        ))}
      </div>

    
    
    </div>
  )
}

export default Users