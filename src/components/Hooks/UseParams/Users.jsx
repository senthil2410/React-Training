import React from "react";
import { Link } from "react-router-dom";

const users=[{id:1,name:"Senthil"},
            {id:2,name:"Kumar"},
            {id:3,name:"Thangaraj"}
            ]

const Users=()=>
{
  return(
   <div>
        <h1>User-List</h1>
        <ul>
        {
            users.map(user=>
            (
              <li key={user.id}>
                <Link to={`/profile/${user.id}`}>{user.name}</Link>
              </li>
            ))
        }
        </ul>
   </div>
    );
}

export default Users;