import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Signup = () => {
  const { user, setUser } = useContext(UserContext);
  const handleSignup = () => {
    setUser({ name: "Alice", email: "alice@test.com" });
  };
  return (
    <div className="component-container">
      <h2>Signup</h2>
      <p>User Name: {user.name}</p>
      <p>User Email: {user.email}</p>
      <button onClick={handleSignup}>Signup as Alice</button>
    </div>
  );
};

export default Signup;
