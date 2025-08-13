import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";
const UseCallback=()=>
{
    const [todos,setTodos]=useState(["Walk-up"])
    const [activity,setActivity]=useState("");
    const [message,setMessage]=useState("");

       console.log("parent clicked");
 
    const addTodo=useCallback((newactivity)=>
    {
           setTodos((prev)=>[...prev,newactivity]);
           setActivity('');
    },[])

    return(
        <div>
            <h2>Use callback hook </h2>

             <input type="text" onChange={(e)=>setMessage(e.target.value)} />

            {todos.map((todo,index)=>
                (
                    <ul>
                        <li key={index}>{todo}</li>
                    </ul>
                )
            )}
            <UseCallbackChild activity={activity} setActivity={setActivity} addTodo={addTodo} />
        </div>
    )

}

export default UseCallback;