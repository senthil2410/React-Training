import React, { useContext } from "react";
import { AuthContext } from "../../HigherOrderComponenet/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Home page</h1>
      {user && <p>Welcome, {user.email}!</p>}
    </div>
  );
};

export default Home;