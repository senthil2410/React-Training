import React from "react";
import { forwardRef } from "react";

const ChildComponent=forwardRef(({label,error,...probs},ref)=>
{
    return(
   <div>
    <label>
        {label}
    </label>

    <input ref={ref} {...probs} />
    {error && <div style={{color:"red"}}>{error} </div>}

   </div>
    );
});


export default ChildComponent;