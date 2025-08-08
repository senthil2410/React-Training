import React from "react";

import { useState } from "react";
import { useEffect } from "react";


const Updating=()=>
{
    const[product,setProduct]=useState([]);
    const [count,setCount]=useState(1);
    
        useEffect(()=>
        {
            fetchData();
    
        },[count]);
    
        const fetchData=async()=>
        {
            try{
            const response=await fetch(`https://fakestoreapi.com/products/${count}`);
            const data=await response.json();
            setProduct(data);
            }
            catch(err)
            {
                console.log("Error",err);
            }
        }
        const handleClick=()=>
        {
            setCount(count+1)
        }

    return(
        <div>
          <button onClick={handleClick}  className="button">Increment</button>
           <h1>{product.title}</h1>
           <h2>{product.description}</h2>              
        </div>
    );
}

export default Updating;