import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

function App () {
  return <User 
  name="Big Baan" 
  age={22} 
  isMarried={false} 
  hobbies={["coding", "sleepong", "readgin"]} 
  img="https://via.placeholder.com/150"
  alt="User Avatar"
  />
}

const User = ({img, name, age, isMarried, hobbies, alt }) => {
return <section>
  <img src={img} alt={alt} width={200}/>
  <h1>Name: {name}</h1>
  <h2>Age: {age}</h2>
  <h2>Marital Status: {isMarried ? "Married" : "Single"}</h2>
  <h3>Hobbies: {hobbies}</h3>
</section>
}

export default App;
