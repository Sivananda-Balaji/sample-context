const Home = ({ user }) => {
  return (
    <div className="component-container">
      <h2>Home Component</h2>
      <p>Welcome {user.name}</p>
      <p>Your Email is {user.email}</p>
    </div>
  );
};

export default Home;
