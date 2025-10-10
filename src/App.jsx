const Cart = () => {
  const items = ["Apple", "Banana", "Orange"]

  return <div>
    <h1>Cart</h1>
    {items.length > 2 && <h2>You have {items.length} items in your cart</h2>}

    <ul>
      <h4>Products</h4>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
};


function App () {
  return (
    <>
    <Cart />
    </>
  )
}

export default App;
