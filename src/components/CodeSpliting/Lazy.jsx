import React from "react";
import { lazy, Suspense, useState } from "react";
import ProductData from "./ProductData";

const Lazy=()=>
{
    const [users,setUsers]=useState(false);

    return(
        <div>
           <h1>Lazy Loading....</h1>
            <button onClick={()=>setUsers(true)}>load user</button>
            {
                users &&(
                    <Suspense fallback={<p>Loading Users....</p>}>
                        <ProductData/>
                    </Suspense>
                )
            }
        </div>
    )
}

export default Lazy;