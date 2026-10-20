import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import UserContextProvider from "./providers/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
        <Signup />
        <Home />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
