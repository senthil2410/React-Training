import React, { useState } from "react";
import "../FormComponents/FormComponents.css"

const FormComponents=()=>
{

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
            <div className="form-group">
           <div>
            <label>Name : </label>
             <input type="text"
                name="name"
                value={user.name}
                placeholder="Enter the name"
                onChange={handleChange}
                required
             />
           </div>
           <div>
            <label>Password : </label>
             <input type="password"
                name="password"
                value={user.password}
                placeholder="Enter the Password"
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label>Email : </label>
             <input type="email"
                name="email"
                value={user.email}
                placeholder="Enter the email"
                onChange={handleChange}
                required
            />
           </div>
           <div>
            <label>DOB :</label>
             <input type="date"
                name="dob"
                value={user.dob}
                placeholder="Enter the Date of Birth"
                onChange={handleChange}
                required
            />
           </div>
           <div className="gender" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
             <label>Select Gender : </label>
             <label>
             <input type="radio" 
                name="gender"
                value="male"
                checked={user.gender==="male"}
                onChange={handleChange}
             />Male
             </label>
             <label>
             <input type="radio" 
                name="gender"
                value="female"
                checked={user.gender==="female"}
                onChange={handleChange}
             />Female
             </label>
             <label>
             <input type="radio" 
                name="gender"
                value="others"
                checked={user.gender==="others"}
                onChange={handleChange}
             />Others
             </label>
           </div>
           <div>
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
           <div>
             <label>Aadhar Card</label>
             <input type="file" 
                    placeholder="Provide the aadhar-card copy"
                    name="file"
             />
           </div>
            <div>
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
     
          </div>
       </form>
       
     </div>   
    )
}

export default FormComponents;