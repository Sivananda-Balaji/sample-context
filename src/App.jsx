import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@test.com",
  });
  return (
    <div className="app-container">
      <Signup user={user} setUser={setUser} />
      <Home user={user} />
      <Profile user={user} setUser={setUser} />
    </div>
  );
}

export default App;
