import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import hotel from "./assets/hotel.jpg"
import "./assets/styles/App.css"
import Button from "./components/Button";
import Profile from "./components/Profile";
import Square from "./components/tic-tac-toe/Square";
import Board from "./components/tic-tac-toe/Board";
import State from "./components/StateManagement";
import ConditionalRendering from "./components/ConditionalRendering/ConditionalRendering";
import List from "./components/List/List";
import FormComponents from "./components/FormComponents/FormComponents";
import Product from "./components/Products/Product";
import FilterProduct from "./components/Products/FilterProduct";
import Mounting from "./components/Effect/Mounting";
import Updating from "./components/Effect/Updating";
const Greeting=()=>
{
    return <h3>Hello World</h3>
}

export  const App = () => {
  return (
    <Router>
     {/* <>
      <h1>React Configuration</h1>
      <img src={hotel} alt="Hotel" />
      <Greeting/>
      <Button/>
      <Profile/>
      </>  */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/board" element={<Board />} />
          <Route path="/state" element={<State />} />
          <Route path="/render" element={<ConditionalRendering/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/form" element={<FormComponents/>} />
          <Route path="/product" element={<Product />}/>
          <Route path="/filterproduct" elemeent={<FilterProduct />} />
          <Route path="/mount" element={<Mounting />} />
          <Route path="/update" element={<Updating />} />
        </Routes>
      
    </Router>
  );
};

export default App;