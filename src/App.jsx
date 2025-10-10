import ProductInfo from "./components/ProductInfo";

function App () {
  const numbers = [1, 2, 3, 4, 5]
  const usersInfo = [
    {
      username: "Big Baan",
      email: "test@gmail.com",
      location: "India"
    },
     {
      username: "Big Baan",
      email: "test@gmail.com",
      location: "Indonasia"
    },
     {
      username: "Big Baan",
      email: "test@gmail.com",
      location: "France"
    }

  ]

  return (
   <main>
    {numbers.map(number => (
      <ul key={number}>
        <li>{number}</li>
      </ul>
    ))}
    {usersInfo.map(({username, email, location }) => (
      <ul key={Math.random()}>
        <li>{username}</li>
        <li>{email}</li>
        <li>{location}</li>
      </ul>
    ))}
   </main>
  )
}

export default App;
