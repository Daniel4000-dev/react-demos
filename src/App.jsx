function App () {
  const myName = "John Doe";
  const multiply = (a, b) => a * b;

  return (
   <section id="section">
    <p>{2 + 2}</p>

    <h1>{myName}</h1>
    <p>My Friend List: {["Alex", "John", "Waheed", "Jordan"]}</p>
    <p>2 * 10 = {multiply(2, 2)}</p>
   </section>
  )
}

export default App;
