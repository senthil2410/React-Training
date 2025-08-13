import React, { useDebugValue, useEffect, useState } from "react";

const UseDebugValue=()=>
{


    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [status,setStatus]=useState("");

    useDebugValue(status,(output)=>`Status is ${output} `);

    useEffect(() => {

        (async () => {

            setStatus("loading");

            try {
            const response = await fetch("https://fakestoreapi.com/products/1");

            if (!response.ok) {
                throw new Error(`There is an HTTP error : ${response.status}`);
            }

            const result = await response.json();

            setData(result);
            setStatus("Sucess");

            } 

            catch (err) {
            setError(err);
            setStatus("error");

            }
        })();
    }, []);


    return(
        <div>
            {data &&(
                <div>
               <h1>{data.title}</h1>
               <p>{data.description}</p>
               </div>
            )}
       
        {status==="error" &&<p>There is an error {error} </p>}
         </div>
    )



}
export default UseDebugValue;