import React from "react";
import { createPortal } from "react-dom";

const Portals=()=>
{
    return(
    <div>
   <h1>The element is placed in regular dom</h1>
   {
    createPortal(
        <p>The element is placed inside the document body</p>,
        document.body
    )
   }
   </div>
    );
}

export default Portals;