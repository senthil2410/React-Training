import React, { useState } from "react";



const ErrorComponent=()=>
{
    const [count,setCount]=useState(0);
     
    if(count==5)
    {
        throw new Error("The count has reached its maximum limit");
    }

    return(
        <>
         <h1 style={{textAlign:"center"}}>Error Boundary Check</h1>
        <div className="button-container">
         <button type="click" onClick={()=>setCount(count+1)}>Increment</button>
          <h2 style={{textAlign:"center"}}>{count}</h2>  
         <button type="click" onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        </>
    )
}
export default ErrorComponent;