import React from "react";
import "./my-counter.js"
const CustomElement=()=>
{

    return(
        <>
        <h1 style={{textAlign:"center"}}> Custom Elements</h1>  
        <my-counter count="5"></my-counter>
        </>
    )
    
  
}

export default CustomElement;