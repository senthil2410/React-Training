import React from "react";
import Login from "../Context/Login";

const ConditionalRendering=()=>
{
    const isLoggedin=true;
    const isUser="admin"
    return(
        <>
         {isLoggedin ? (
         <>
          <h1>Welcome  to home page </h1>
        </>
      ) : (
        <Login />
      )}
      
    {
        isUser==="admin"&&<p>Welcome to the Admin page</p>
    }
    
    </>
  );
}

export default ConditionalRendering;