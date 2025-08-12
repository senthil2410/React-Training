import React, { useEffect, useState } from "react";
import "../assets/styles/StateManagement.css"
const StateManagement=()=>
{
    const [id,setId]=useState(1);
    const [data,setData]=useState(null);



    useEffect(()=>
    {
        fetchData();

    },[id])

    const fetchData=async()=>
    {
        try{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        if(!response.ok)
        {
            throw new Error(`The product Id does not have any products ${id}`)
        }
        const data=await response.json();
        setData(data);
    
        }
        catch(err)
        {
            console.log("Error",err);
            setData(null);
        
        }
    }
       
    const handleIncrement=()=>
    {
        setId(id+1);
    }

      const handleDecrement=()=>
    {
        if(id>1)
        setId(id-1);
    }
    

    return(
        <div className="counter">
            <button onClick={handleIncrement} className="button">Forward</button>
            <h1 className="head">{id}</h1>
            <button onClick={handleDecrement} className="button" >Back</button>
            <hr/>
        <div className="fetch-container">
            {data?.title &&  <h1>{data.title}</h1>}
              {data?.image&&<img src={data.image} alt={data.title}/>}
        </div>         
        </div>
        


    )
}

export default StateManagement;
