import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const UpdateProfile = () => {
  const { setUser } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@test.com",
  });
  const handleUpdate = () => {
    setUser((prev) => ({
      ...prev,
      name: userProfile.name,
      email: userProfile.email,
    }));
  };
  return (
    <div>
      <h2>UpdateProfile</h2>
      <div>
        <div>
          <label htmlFor="userName">Name:</label>
          <input
            type="text"
            id="userName"
            value={userProfile.name}
            onChange={(e) =>
              setUserProfile((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="userEmail">Email:</label>
          <input
            type="text"
            id="userEmail"
            value={userProfile.email}
            onChange={(e) =>
              setUserProfile((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
};

export default UpdateProfile;
