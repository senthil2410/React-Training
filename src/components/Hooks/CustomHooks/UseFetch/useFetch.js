import React, { useEffect, useState } from "react";

const useFetch=(url)=>
{
     const [data,setData]=useState(null);
     const[loading,setLoading]=useState(true);
     const[error,setError]=useState(null);

     useEffect(()=>
    {
        fetch(url)
        .then(response=>
        {
            if(!response.ok)
            {
               throw new Error("There is some network error");
            }
            return response.json();
        })
        .then(res=>setData(res))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
      
    },[url])

    return{data,loading,error}
}

export default useFetch;

