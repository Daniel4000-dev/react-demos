import Card from "./components/Card";
import Person from "./components/Person";
import Product from "./components/Product";
import ProductInfo from "./components/ProductInfo";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

const Password = ({isValid}) => {
  // if (isValid) {
  //   return <ValidPassword />
  // }

  // return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />
}

function App () {
  return (
    <>
    <Password isValid={false} />
    </>
  )
}

export default App;
