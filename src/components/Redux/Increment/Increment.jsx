import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset,incrementByValue } from "./CounterSlice";

const Increment=()=>
{
    const dispatch=useDispatch();
    const inputref=useRef();
    const count=useSelector((state)=>state.counter.value);
return(
    <div>

       <h1>Increment and decrement </h1>

       <button type="button" onClick={()=>dispatch(increment())}>Increment</button>
        <h3 style={{textAlign:"center"}}>Counter value :{count}</h3>
        <button type="button" onClick={()=>dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={()=>dispatch(reset())}>Reset</button>

        <input ref={inputref} placeholder="Enter the number"/>
        <button type="button" onClick={()=>dispatch(incrementByValue (Number(inputref.current.value)))}>
            Increment By {inputref.current?.value||0}
        </button>
        
    </div>
);
}

export default Increment;