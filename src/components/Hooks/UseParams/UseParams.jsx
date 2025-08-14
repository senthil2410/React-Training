import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const usersdetails=[{id:1,name:"Senthil",email:"senthil@gmail.com",place:"palani"},
            {id:2,name:"Kumar",email:"kumar@gmail.com",place:"Dharapuram"},
            {id:3,name:"Thangaraj",email:"thangaraj@gmail.com",place:"Pollachi"}
             ]

const UseParams=()=>
{
    const {id}=useParams();
    const [user,setUser]=useState(null);

    useEffect(()=>
    {
        const data = usersdetails.find((user) => user.id === Number(id));
         setUser(data);
    },[id]);

    if(!user)
    {
        return <div>User not found</div>
    }
    return(
        <div>
            <h1>Name : {user.name}</h1>
            <p>Email : {user.email}</p>
            <p>Place : {user.place}</p>
        </div>
    )
}

export default UseParams;