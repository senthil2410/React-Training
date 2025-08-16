import React, { createContext, useEffect, useState } from "react";



   const userdata=[{email:"senthil@gmail.com",password:"Senthil@123"},
                   {email:"kumar@gmail.com",password:"Kumar@123"}]

    export const AuthContext=createContext();

    export const AuthProvider=({children})=>
    {
        const[user,setUser]=useState(()=>
        {
            const storeduser=localStorage.getItem("user");

            return storeduser ? JSON.parse(storeduser):null
        })
        useEffect(()=>
        {
            if(user)
            {
                localStorage.setItem('user',JSON.stringify(user));
            }
            else{
                localStorage.removeItem('user');
            }

        },[user])

        const login=(email,password)=>
        {
            const founduser=userdata.find(user=>user.email===email&&user.password===password);

            if(founduser)
            {
                setUser({email});
                return true;
            }
            else{
                return false;
            }
        }

        const logout=()=>
        {
            setUser(null);
        }

        const isLoggedin= !!user;

        return(
            <AuthContext.Provider value={{isLoggedin,logout,login,user}}>
               {children}
            </AuthContext.Provider>
        );

        
    };

