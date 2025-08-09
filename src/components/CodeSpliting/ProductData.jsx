import { useEffect, useState } from "react";
import React from "react";
const ProductData=()=>
{
    const [data,setData]=useState([]);
      
    useEffect(()=>
    {
       fetch("https://fakestoreapi.com/products/1")
       .then(response=>response.json())
       .then(data=>setData(data))
       .catch(err=>console.log("ERROR MESSAGE",err));
    })


    return(
        <div>
           <h2>Product-Data</h2>
           {data &&
           <h1>{data.title}</h1>
           }

        </div>
    )

}

export default ProductData;


