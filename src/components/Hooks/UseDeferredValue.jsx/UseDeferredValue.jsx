import React, { useDeferredValue, useEffect, useState } from "react";

const UseDeferredValue=()=>
{
   const [search,setSearch]=useState('');
   const [data,setData]=useState([]);
   const deferredValue=useDeferredValue(search);

   useEffect(()=>
   {
       fetch("https://fakestoreapi.com/products")
       .then(response=>
       {
         if(!response.ok)
         {
            return new Error("There is some network error");
         }
         return response.json();
       }
       )
       .then(res=>setData(res))
       .catch(err=>console.log("there is an error",err));
   },[]);

   const filtereredProduct=data.filter(product=>
   {
      return  product.title.toLowerCase().includes(deferredValue.toLowerCase());
   }
   )

   return(
    <div>
        <input type="text"
                value={search}
               placeholder="Serach the Product....."
               onChange={(e=>setSearch(e.target.value))}
        />
        {
            search !==deferredValue && <p style={{color:"red"}}>Loading... </p>
        }
        <ul>
            {
                filtereredProduct.map((product,index)=>
                (
                    <li key={index}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </li>
                ))
            }

        </ul>


    </div>
   )
}

export default UseDeferredValue;