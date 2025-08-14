import React from "react";
import { useLocation } from "react-router-dom";


 const users = [
  { id: 1, name: "Senthil" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "Thangaraj" },
];

const SearchUser=()=>
{
    const location=useLocation();
    const params=new URLSearchParams(location.search);
    const user=params.get("user")||"";

    const foundUser=users.find(person=>person.name.toLowerCase()===user);

    return(
        <div>
            <h1>Search Users with useLocation Hook</h1>

            
          { foundUser ? (
            <div>
               <h1>User Found</h1>
               <p>{foundUser.id}</p>
               <p>{foundUser.name}</p>
          </div>
        ) : (
          <div style={{color:"red"}}>User {`${user}`} not found.</div>
        )
       }
        </div>
    )
}

export default SearchUser;