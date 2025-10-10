import Card from "./components/Card";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

function App () {
  return (
    <>
    <Card>
      <h1>My Card</h1>
      <p>This is some content for card 1</p>
    </Card>
    <Card>
      <h1>My Card</h1>
      <p>This is some content for card 2</p>
    </Card>
    <Card>
      <h1>My Card</h1>
      <p>This is some content for card 3</p>
    </Card>
    </>
  )
}

export default App;
