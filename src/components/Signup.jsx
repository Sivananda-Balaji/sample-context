const Signup = ({ user, setUser }) => {
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
