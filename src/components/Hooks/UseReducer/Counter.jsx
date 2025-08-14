import React, { act, useReducer, useState } from "react";


  const reducer=((state,action)=>
    {

        switch (action.type)
        {
            case 'increment':
            {
                return({count:state.count+action.payload});
               
            }
            case 'decrement':
            {
                if(state.count>action.payload)
                return({count:state.count-action.payload});
                else{
                    return({count:0});
                }
            }
            case 'reset':
            {
                  return({count:0});
            }
            default:
                throw new Error("Invalid action",action.type);
        }

    });

const Counter=()=>
{
    const[state,dispatch]=useReducer(reducer,{count:0});
    const[input,setInput]=useState(0);

    const handleInput=(e)=>
    {
        setInput(e.target.value);
    }  
     
   return(
    <div>
        <h1>Increment and Decrement Example for UseReducer</h1>

         <h3>Count:{state.count}</h3>

         <input 
           type="number" 
           value={input} 
           onChange={(e)=>setInput(e.target.value)} 
    
        />

        <button 
          type="button"
          onClick={()=>{dispatch({type:"increment",payload:Number(input)}); setInput(0)}}>Increment
        </button>

       <button 
          type="button"
          onClick={()=>{dispatch({type:"decrement",payload:Number(input)}); setInput(0)}}>Decrement
        </button>

       <button
          type="button"
          onClick={()=>dispatch({type:"reset"})}>Reset
        </button>

        
    </div>
   )
}

export default Counter;