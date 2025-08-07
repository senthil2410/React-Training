import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import hotel from "../assets/hotel.jpg"
import "../styles/App.css"
import Button from "./Button";
import Profile from "./Profile";
import Square from "./tic-tac-toe/Square";
import Board from "./tic-tac-toe/Board";
import State from "./StateManagement";
import ConditionalRendering from "./ConditionalRendering";

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
        </Routes>
      
    </Router>
  );
};

export default App;