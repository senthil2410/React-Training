import React, { useReducer, useState } from "react";
import * as styles from "./Todo.module.css"

const reducer=(todos,action)=>
{
      switch(action.type)
      {
         case "add":
        {
            return [...todos,
                {
                    id:Date.now(),
                    task:action.todo,
                    done:false
                }
            ]
        }

        case "delete":
        {
           return todos.filter(todo=>todo.id!==action.id);

        }

        case "toggle":
        {
          return todos.map(todo=>todo.id===action.id ?
            {...todo,done:!todo.done} :todo
           )
        }

        default:
            return[...todos];
    

      }
}

const initaltask=[]

const Todo=()=>
{
    const [activity,setActivity]=useState("");
    const[todos,dispatch]=useReducer(reducer,initaltask);

    const handleAdd=()=>
    {
        if(!activity.trim())
        {
            return 
        }
        dispatch({type:"add",todo:activity});
        setActivity("");
    }

    return(
    
        <div className={styles.container}>
            <h2 style={{textAlign:"center"}}>Todo List-UseReducer</h2>

            <input type="text"
                    value={activity}
                    onChange={(e)=>setActivity(e.target.value)}
        
            />
            <button type="button"onClick={handleAdd}> Add </button>

         
            <ul>
                {todos.map(todo=>
                    (
                        <li key={todo.id}>
                            <span onClick={()=>dispatch({type:"toggle",id:todo.id})}
                            className={`${styles.task} ${todo.done ? styles.done : ""}`}>

                                {todo.task}
                            </span>

                            <button  type="button" onClick={()=>dispatch({type:"delete",id:todo.id})}>delete</button>
                        </li>
                        
                  ))}
            </ul>
        
           

        </div>
    )

}


export default Todo;