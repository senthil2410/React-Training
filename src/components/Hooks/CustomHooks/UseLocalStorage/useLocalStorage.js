import { useEffect, useState } from "react";

const useLocalStorage=(key,initialvalue)=>
{
    const [value,setValue]=useState(()=>
{
    const user=localStorage.getItem(key);

    return user ?JSON.parse(user):initialvalue;
})

useEffect(()=>
{
   localStorage.setItem(key,JSON.stringify(value));
},[key,value]);

return [value,setValue];

}

export default useLocalStorage;