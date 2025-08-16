import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";


const UserInfo = () => {
  const [storedValue, setStoredValue] = useLocalStorage("user", { name: "" });
  
  const [name, setName] = useState(storedValue.name);

  useEffect(() => {
    setName(storedValue.name);
  }, [storedValue]);


  const handleChange = (e) => {
    setName(e.target.value);
  };


  const handleSubmit = () => {
    setStoredValue({ name: name });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter the name"
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Save</button>
      <h1>Welcome {storedValue.name}</h1>

    </div>
  );
};

export default UserInfo;
