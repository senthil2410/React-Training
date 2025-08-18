import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Increment/CounterSlice";
import TodoSlice  from "./Todo/TodoSlice";

const Store=configureStore({
    reducer:
    {
        counter:CounterReducer,
        todo:TodoSlice
    }
});

export default Store;