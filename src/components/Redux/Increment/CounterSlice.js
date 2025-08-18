import { createSlice } from "@reduxjs/toolkit";


export const CounterSlice=createSlice(
    {
        name:"counter",
        initialState:
        {
            value:0,
        },
        reducers:
        {
           increment:(state)=>
           {
             state.value+=1;
           },

            decrement:(state)=>
           {
             state.value-=1;
           },
           reset:(state)=>
           {
              state.value=0;
           },
           incrementByValue:(state,action)=>
           {
            state.value+=action.payload;
           }
        }

    }
);

export const {increment,decrement,reset,incrementByValue}=CounterSlice.actions;

export default CounterSlice.reducer;