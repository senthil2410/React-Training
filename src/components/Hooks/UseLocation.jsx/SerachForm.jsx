import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm=()=>
{
    const [input,setInput]=useState("");

    const navigate=useNavigate();

    const handleSubmit=(e)=>
    {
        e.preventDefault();

        navigate(`/searchdata?user=${encodeURIComponent(input)}`)

    }
    
    return(
        <div>
           <form onSubmit={handleSubmit}>
              <input type="text"
                     placeholder="serach user"
                     value={input}
                     onChange={(e)=>setInput(e.target.value)}
               />
               <button type="submit">Search</button>
           </form>
        </div>
    )
    
}

export default SearchForm;