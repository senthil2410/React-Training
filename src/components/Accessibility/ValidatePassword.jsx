import React, { useId, useState } from "react";

const ValidatePassword=({label,hint})=>
{
     const[value,setValue]=useState("");
      const [error,setError]=useState("");
      const id=useId();

      const handleChange=(e)=>
      {
         const newpassword=e.target.value;
         setValue(newpassword);

         if(newpassword.length <16)
         {
             setError("Password should be 16 characters");
         }
         else{
          setError("");
         }
      }

      return(
        <div>
      <label htmlFor={id}>{label}</label>

      <input type="password" aria-describedby={`${id}-hint`}  value={value} onChange={handleChange}/>

      {value&&!error&&
      (<p id={`$id-message`} style={{color:"green" ,fontSize:"16px"}}>{hint}</p>)
      }
     {error && 
     (<error id={`$id-message`}  style={{color:"red",fontSize:"16px" }}>
      {error}
      </error> 
     )
     }
      </div>
      )
    
}

export  default ValidatePassword;