import React, { useEffect, useState } from "react";
import "../styles/StateManagement.css"
const State=()=>
{
    const [count,setCount]=useState(1);
    const [data,setData]=useState("");


    useEffect(()=>
    {
        fetchData();

    },[count])

    const fetchData=async()=>
    {
        try{
        const response=await fetch(`https://fakestoreapi.com/products/${count}`);
        const data=await response.json();
        setData(data);
        }
        catch(err)
        {
            console.log("Error",err);
        }
    }
       
    const handleIncrement=()=>
    {
        setCount(count+1);
    }

      const handleDecrement=()=>
    {
        setCount(count-1);
    }
    

    return(
        <div className="counter">
            <button onClick={handleIncrement} className="button">Increment</button>
            <h1 className="head">{count}</h1>
            <button onClick={handleDecrement} className="button" >Decrement</button>
            <hr/>
        <div className="fetch-container">
              <h1>{data.title}</h1>
              {data.image&&<img src={data.image} alt={data.title}/>}
        </div>         
        </div>
        


    )
}

export default State;