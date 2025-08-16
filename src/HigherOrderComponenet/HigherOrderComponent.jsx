import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { AuthContext } from "./AuthContext";
const HigherOrderComponent=(Component)=>
{
   
   return function authentication(probs)
   {
        const {isLoggedin}=useContext(AuthContext);
         if(!isLoggedin)
         {
          return  <Navigate to="/login" />
         }

         return <Component {...probs} />

   }
}

export default HigherOrderComponent;