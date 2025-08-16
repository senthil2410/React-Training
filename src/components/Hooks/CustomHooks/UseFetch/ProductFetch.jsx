import React from "react";
import useFetch from "./useFetch";

const ProductFetch=()=>
{
    const {data,error,loading}=useFetch('https://fakestoreapi.com/products');

    if(error)
        return <h1>There is some  error while fetching the data</h1>

    if(loading)
        return <h2>Product data loading</h2>

    return(
        <div>
         <ul>
            {
                data.map((product,index)=>(
                    
                   <li key={index}>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                   </li>    
                ))
            }
         </ul>
        </div>
    );
    
}

export default ProductFetch;