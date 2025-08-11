import React, { Fragment } from "react";
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
import Lazy from "./components/CodeSpliting/Lazy";
import Login from "./components/Context/Login";
import { AuthProvider } from "./components/Context/AuthContext";
import Home from "./components/Context/Home";
import Password from "./components/Accessibility/Password";
import ErrorChecking from "./components/ErrorBoundry/ErrorChecking";
import ErrorComponent from "./components/ErrorBoundry/ErrorComponent";
import ErrorBoundryClass from "./components/ErrorBoundry/ErrorBoundaryClass";
import ParentComponent from "./components/ForwardingRef/ParentComponent";
import Fragments from "./components/Fragment/Fragments";
import Portals from "./components/Portals/Portals";
import LoginForm from "./components/Portals/LoginForm";

const Greeting=()=>
{
    return <h3>Hello World</h3>
}

export  const App = () => {
  return (
    <Router>
      <AuthProvider>
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
          <Route path="/filterproduct" element={<FilterProduct />} />
          <Route path="/mount" element={<Mounting />} />
          <Route path="/update" element={<Updating />} />
          <Route path="/lazy"  element={<Lazy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home"  element={<Home />} />
          <Route path="/password" element={<Password />} />
          <Route path="/error"  element={<ErrorChecking>< ErrorComponent/></ErrorChecking>}/>
          <Route path="/errorclass" element={<ErrorBoundryClass><ErrorComponent /></ErrorBoundryClass>}/>
          <Route path="/forwardref" element={<ParentComponent />} />
          <Route path="/fragment"  element={<Fragments />} />
          <Route path="/portal"  element={<Portals />} />
          <Route path="/loginform" element={<LoginForm />} />
         </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;