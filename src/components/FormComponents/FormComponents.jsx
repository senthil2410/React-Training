import React, { useState } from "react";
import "../FormComponents/FormComponents.css"

const FormComponents=()=>
{
      const formfield= [{ label: "Name", type: "text", name: "name", placeholder: "Enter the name" },
                        { label: "Password", type: "password", name: "password", placeholder: "Enter the password" },
                        { label: "Email", type: "email", name: "email", placeholder: "Enter the email" },
                        { label: "DOB", type: "date", name: "dob", placeholder: "Enter DOB" }]

    const genders = ["male", "female", "others"];

    const[user,setUser]=useState(
        {
            name:"",
            password:"",
            email:"",
            dob:"",
            gender:"",
            course:"CSE",
            agree:false
        }
    )

    const handleChange=(e)=>
    {
        const{name,value,checked,type}=e.target;
        {
             setUser((prev)=>
            ({
                ...prev,
                [name]:type==="checkbox"?checked:value
            }))
        }
    }

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        console.log("Form is submitted");
        alert("Form is Submittted");
    }



    return(
        <div>
            <form className="form-container" onSubmit={handleSubmit}>

            {formfield.map(form => (
         <div className="form-group">
            <label>{form.name}</label>
            <input type={form.type}
                   name={form.name}
                   value={user[form.name]}
                   placeholder={form.placeholder}
                   onChange={handleChange}
                    />

        </div>
      ))}
           <div className="form-group gender" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
             <label>Select Gender : </label>
             {genders.map((gender)=>
            (
                <label>
                    <input
                     type="radio"
                     name="gender"
                     value={gender}
                     checked={user.gender=gender}
                     onChange={handleChange}
                     />
                     {gender}
                </label>

            ))}
              
             </div>
           
           <div className="form-group course">
             <label>Select Course</label>
             <select name="course"
                value={user.course}
                onChange={handleChange}>
                    <option value=" ">--SELECT COURSE--</option>
                     <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                       <option value="ECE">ECE</option>
                </select>
           </div>
           <div className="form-group file"  >
             <label>Aadhar Card</label>
             <input type="file" 
                    placeholder="Provide the aadhar-card copy"
                    name="file"
             />
           </div>
            <div className="form-group check"  >
                <label>
                  <input type="checkbox"
                     name="agree"
                     checked={user.agree}
                     onChange={handleChange}
                  />
                  I agree for  the terms and conditions
                </label>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
     
          
       </form>
       
     </div>  
    )
}

export default FormComponents;