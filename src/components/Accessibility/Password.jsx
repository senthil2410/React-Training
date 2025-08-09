import React from "react";
import ValidatePassword from "./ValidatePassword";

const Password=()=>
{
    return(
    <form>
    <ValidatePassword 
    label="Password" 
    hint="password should be atleast  8 characters"/>


    <ValidatePassword 
    label="confirm-paswsword" 
    hint="Confirm password should match previous password" />

    <button type="submit">validate-password</button>

    </form>
    );
    
}

export default Password;