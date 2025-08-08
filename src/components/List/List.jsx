import  { useEffect, useState } from "react";
import React from "react";
const List=()=>
{
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);

    const user=
    [
        {name:{firstname:"senthil",lastname:"kumar"} ,email:"senthil@gamil.com" },
         {name:{firstname:"kumar",lastname:"thangaraj"} ,email:"kumar@gamil.com" },
          {name:{firstname:"adhira",lastname:"adhi"} ,email:"adhira@gamil.com" },
           {name:{firstname:"abinaya",lastname:"thangaraj"} ,email:"abinaya@gamil.com" }
        
        
    ]

    useEffect(()=>
    {
        const fetchUsers=async()=>
        {
              try{
             //   const response=await fetch("https://fakestoreapi.com/users");
                const result=await response.json()||user;
                setData(result);
              }
              catch(err)
              {
                console.log("There is some error",err);
                setError(true);
                setData(user);
              }
        }
        
        fetchUsers();
    },[]);

    return(
        <div> 
            <h1 style={{textAlign:"center"}}>LIST AND KEYS</h1>   
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.name.firstname} {user.name.lastname} - {user.email}
          </li>
        ))}
      </ul>
        </div>
      
    )

}

export default List;