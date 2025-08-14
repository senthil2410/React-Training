import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseNavigate=()=>
{

    const [user,setUser]=useState(
        {
            email:"",
            password:"",
        }
    );

      const navigate=useNavigate();


    const handleSubmit=(e)=>
    {
        e.preventDefault();
         if(user.email==="senthil@gmail.com"&&user.password==="Senthil@1234")
        {
        alert("Form is submitted successfully");
        navigate("/home")
        }
        else{
        alert("pls enter crct credientails");
        }
    }

    const handleChange=(e)=>
    {
        const {name,value}=e.target;

        setUser({...user,
     [name]:value})
    }



    const formdata=[{type:"text",name:"email" ,value:user.email, placeholder:"Enter the email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"},
                    {type:"password", name:"password",value:user.password , placeholder:"Enter the password",pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$"}
                   ]

    return(
        <div>
          <form onSubmit={handleSubmit}>
           {formdata.map((data,index)=>
            (
                <input type={data.type}
                     key={index}
                     name={data.name}
                    value={data.value}
                    placeholder={data.placeholder}
                    pattern={data.pattern}
                   
                    onChange={handleChange}
                />     
           )
           )}
           <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default UseNavigate;