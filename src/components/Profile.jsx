import { useContext } from "react";
import UpdateProfile from "./UpdateProfile";
import { UserContext } from "../contexts/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="component-container">
      <h2>Profile Component</h2>
      <p>Profile Name: {user.name}</p>
      <p>Profile Email: {user.email}</p>
      <UpdateProfile />
    </div>
  );
};

export default Profile;
