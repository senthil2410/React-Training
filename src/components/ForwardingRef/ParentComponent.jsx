import React, { useState } from "react";

import { useRef } from "react";
import ChildComponent from "./ChildComponent";
import * as styles from "./ForwardingRef.module.css";


const ParentComponent=()=>
{
     const reference=useRef(null);
     
     const nameref=useRef();
     const passwordref=useRef();
     const [error,setError]=useState({});

    const nameregex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
    console.log(styles);
    const handleClick=()=>
    {
        reference.current.focus();
    }
  
    const handleSubmit=(e)=>
    {
        e.preventDefault();
         const name=nameref.current.value.trim();
         const password=passwordref.current.value;

         const errors={}

         if(!name)
         {
            errors.name="You should provide the name please"
         }
         else if(!nameregex.test(name))
         {
            errors.name="Name should follow necessary conditions"
         }

         if(!password)
         {
            errors.password="You should provide the password please";
         }
         else if(!passwordregex.test(password))
         {
            errors.password="password should follow necessary conditions"
         }
         
         setError(errors);

         if(Object.keys(errors).length===0)
         {
            alert("Form is submitted sucessfully")
         }
         
         
    }


     return(
        <div className={styles.container}>
            <ChildComponent  label="Enter your Email" type="email" ref={reference} />
            <button type="button" onClick={handleClick}>Click</button>
             <h2 className={styles.h2}>User Login Form</h2>
             <form onSubmit={handleSubmit}>
                <ChildComponent label="Name" 
                placeholder="Enter the User name" 
                type="text" 
                ref={nameref}
                error={error.name}
                />
                <ChildComponent label="Password" 
                placeholder="Enter the Password" 
                type="password" 
                ref={passwordref}
                error={error.password}
                />
                <button type="submit">Submit</button>
             </form>

        </div>
     )
}

export default ParentComponent;