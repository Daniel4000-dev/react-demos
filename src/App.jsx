import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

function App () {
  return (
    <>
    <Person name="Big Baan" age={22} />
    <Product name="Iphone" price={300000} />
    </>
  )
}

export default App;
