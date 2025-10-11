const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <div>It's cold outside!</div>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <div>The weather is moderate.</div>;
  } else {
    return <div>it's hot outside</div>;
  }
};

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <>
    {loggedIn && isAdmin ? "Welcome, Admin!" : loggedIn ? "Welcome, User!" : "Please log in."}
    </>
  )
}

const Greeting = ({ timeOfDay }) => {
  return (
    <>
    {timeOfDay === 'morning' && <h1>Good Morning</h1>}
    {timeOfDay === 'afternoon' && <h1>Good Afternoon!</h1>}
    </>
  )
}

function App() {
  return (
    <>
      <Weather temperature={25} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeOfDay="afternoon" />
    </>
  );
}

export default App;
