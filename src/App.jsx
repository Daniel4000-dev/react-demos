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
    {usersInfo.map((user) => (
      <ul key={Math.random()}>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.location}</li>
      </ul>
    ))}
   </main>
  )
}

export default App;
