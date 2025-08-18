import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const TodoSlice=createSlice(
    {
        name:"todo",
         initialState:
         {
            todos:[]
         },
         reducers:
         {
            addTodo:(state,action)=>
            {
    
                state.todos.push(action.payload);
            },
            updateTodo:(state,action)=>
            {
                console.log(action);
                
                state.todos =state.todos.map(todo=>todo.id===action.payload.id?{...todo,activity:action.payload.activity}:todo)
            },
            deleteTodo:(state,action)=>
            {
                console.log(action);

                state.todos=state.todos.filter(todo=>todo.id!==action.payload.id)
            },
            toggleTodo:(state,action)=>
            {
                console.log(action);
                const value=state.todos.find((item)=>item.id === action.payload.id);

                state.todos=state.todos.map(todo=>todo.id==action.payload.id?{...todo,isCompleted:!value.isCompleted}:todo)
            }
         }
    }

);

export const {addTodo,updateTodo,deleteTodo,toggleTodo}=TodoSlice.actions;

export default TodoSlice.reducer;