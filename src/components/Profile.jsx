import UpdateProfile from "./UpdateProfile";

const Profile = ({ user, setUser }) => {
  return (
    <div className="component-container">
      <h2>Profile Component</h2>
      <p>Profile Name: {user.name}</p>
      <p>Profile Email: {user.email}</p>
      <UpdateProfile setUser={setUser} />
    </div>
  );
};

export default Profile;
