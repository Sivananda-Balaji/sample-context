import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@test.com",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
