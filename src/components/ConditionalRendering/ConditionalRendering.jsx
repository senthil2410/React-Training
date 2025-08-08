import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const ConditionalRendering = () => {

    const [user, setUser] = useState(
        {
            name: "",
            password: ""
        }
    );

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.name === "senthil" && user.password === "123456") {
            navigate("/")
        }
        else {
            console.log("Inavlid credientails");
        }

    }


    return (
        
        <div>
            <div className="login-container">
                <h2 style={{ textAlign: "center", margin: "10px" }}>Login-Form</h2>
                <form className="form-group" onSubmit={handleSubmit} >
                    <input type="text"
                        name="name"
                        value={user.name}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                    <br />

                    <input type="password"
                        name="password"
                        value={user.password}
                        className="form-input"
                        onChange={handleChange}
                        placeholder="Enter your password"

                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        
    )

}

export default ConditionalRendering;