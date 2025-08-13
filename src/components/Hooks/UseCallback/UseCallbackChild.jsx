import React from "react";

const UseCallbackChild=({activity,setActivity,addTodo})=>
   
{
    console.log("child is called");
    return(
    <div>
     <input
       type="text"
       value={activity}
       onChange={(e)=>{setActivity(e.target.value)}}
       placeholder="Add the tasks"
    />

    <button type="button" onClick={()=>addTodo(activity)}>Adding tasks</button>
    </div>
    );

}

export default React.memo(UseCallbackChild);