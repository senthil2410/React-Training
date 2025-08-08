import React from "react";

import { useState } from "react";
import { useEffect } from "react";


const Mounting=()=>
{
    const[product,setProduct]=useState(null);

    useEffect(()=>
    {
         

          fetch("https://fakestoreapi.com/products/1")
           .then(res=>res.json())
           .then(data=>setProduct(data))
            .catch(error => console.error("Error fetching product:", error));


        return ()=>
        {
            setProduct(null);
        }
          
    },[]);

     if (!product) 
    {
        return <p>Loading product...</p>;
    }

    return(
        <div>
            <h2>PRODUCTS</h2>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.description}</p>           
        </div>
    );
}

export default Mounting;