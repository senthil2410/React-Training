import React from "react";
import { Route, Routes } from "react-router-dom";
import Increment from "./components/Redux/Increment/Increment";
import Todo from "./components/Redux/Todo/Todo";

const AppRoutes=()=>
{
    return(
  <>
     <Route path="/increment" element={<Increment />} />
     <Route path="/todolist" element={<Todo />} />
  </>
    );
}

export default AppRoutes;