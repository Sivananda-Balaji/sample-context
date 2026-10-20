import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="component-container">
      <h2>Home Component</h2>
      <p>Welcome {user.name}</p>
      <p>Your Email is {user.email}</p>
    </div>
  );
};

export default Home;
