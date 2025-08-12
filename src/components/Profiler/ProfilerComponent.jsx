import React  from "react";

import { Profiler } from "react";
import StateManagement from "../StateManagement";
import Product from "../Products/Product";
import Profile from "../Profile";
import ParentComponent from "../ForwardingRef/ParentComponent";

const ProfilerComponent=()=>
{

    const onRenderCallback=(id,phase,actualDuration,baseDuration,startTime,commitTime)=>
    {

             console.log(id);
             console.log(phase);

             console.log(actualDuration);
             console.log(baseDuration);

             console.log(startTime);
             console.log(commitTime);
    }

    return(
        <div>
           <Profiler id="Statemanagement" onRender={onRenderCallback}>
            <StateManagement />
           </Profiler>
           <Profiler id="ForwardingRef" onRender={onRenderCallback}>
            <ParentComponent />
           </Profiler>
        
           <Profiler id="Product" onRender={onRenderCallback}>
             <Profiler id="Profile" onRender={onRenderCallback}>
                <Profile />
             </Profiler>
                <Product />
           </Profiler>
        
        </div>
    )
}

export default ProfilerComponent;