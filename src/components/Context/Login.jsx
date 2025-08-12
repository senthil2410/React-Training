import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

    const [user, setUser] = useState({ email: "", password: "" });

  const { email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ 
       ...prev,
      [name]: value,

    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      navigate("/home"); 
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>


      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
           placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
           name="password"
          placeholder="Password"
           value={password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
