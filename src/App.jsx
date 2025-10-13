const Copy = () => {
  const copyHandler = () => console.log("Don't copy my content!");
  return (
    <p onCopy={copyHandler}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui est ducimus
      quam sapiente sunt. Veritatis perferendis culpa quasi porro! Aperiam vel
      optio laudantium amet ullam laborum eaque impedit quia omnis?
    </p>
  );
};

function App() {
  return (
    <section>
      <Copy />
    </section>
  );
}

export default App;
