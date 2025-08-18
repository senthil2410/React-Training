import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo,updateTodo,deleteTodo,toggleTodo } from "./TodoSlice";

const Todo=()=>
{
    const [text,setText]=useState("");
    const dispatch=useDispatch();
    const {todos}=useSelector((state)=>state.todo);
    console.log(todos);
    
    const handleAdd=()=>
    {

        if(text.trim()==="") 
            return
         dispatch(addTodo(
            {
                id:Date.now(),
                activity:text,
                isCompleted:false
            }
         ))
        
    }

    const handleUpdate=(todo)=>
    {
        if(text.trim()==="")
            return
        dispatch(updateTodo(
            {
                ...todo,
                activity:text,
                isCompleted:false,
            }
        ))

    }

    return(
        <div>
            <input 
              type="text"
              placeholder="Enter the task..."
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
            <button type="buttton" onClick={handleAdd}>ADD</button>


            <table>
                <thead>
                   <tr>
                    <th>ID</th>
                    <th>Activity</th>
                    <th>Update</th>
                    <th>Completed</th>
                    <th>Delete</th>
                   </tr>
                </thead>
                <tbody>
                    
                    {todos.map((todo,index)=>
                        (
                        <tr>
                           <td>{index+1}</td>
                           <td style={{textDecoration:todo.isCompleted?"line-through":"none"}}>{todo.activity}</td>
                           <td><button type="button" onClick={()=>handleUpdate(todo)}>Update</button></td>
                           <td><button type="button" onClick={()=>dispatch(toggleTodo({id:todo.id}))}>Toggle</button></td>
                           <td><button type="button" onClick={()=>dispatch(deleteTodo({id:todo.id}))}>Delete</button></td>
                        </tr>        
                        ))}
                </tbody>
   
            </table>         
        </div>

        
    )
}

export default Todo;