import React from "react";
import "../assets/styles/Button.css"

const Button=()=>
{

    const handleClick=()=>
    {
        alert("Button is Clicked");
    }

    return(
        <div>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default Button;