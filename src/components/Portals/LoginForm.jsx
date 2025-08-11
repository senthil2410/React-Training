import React, { useState } from "react";
import Model from "./Model";
import * as styles from "./Model.module.css";
const LoginForm=()=>
{
    const[ismodelOpen,setModelOpen]=useState(false);
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=()=>
    {

    }


   return(
    <>
      <button type="button" onClick={()=>setModelOpen(true)}>Login</button>

      <Model isOpen={ismodelOpen} onClose={()=>setModelOpen(false)}>
        <form onSubmit={handleSubmit} className={styles.container}>
        <input  type="email" 
                placeholder="Enter the email" 
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className={styles.input}
                required
        />
         <input type="password" 
                placeholder="Enter the password" 
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                className={styles.input}
        />
        <button type="submit">Sign in</button>
        </form>
      </Model>
    </>
   )
}

export default LoginForm;