const Move = () => {
  function moveHandler() {
    alert('Mouse move event fired')
    console.log('mouse move event fired')
  }

  return (
    <p onMouseMove={moveHandler}>
      Lorem, ipsum dolo sit amet consectetur adipisicing elit. Qui est ducimus
      quam sapiente sunt. Veritatis perferendis culpa quasi porro! Aperiam vel
      optio laudantium amet ullam laborum eaque impedit quia omnis?
    </p>
  );
};

function App() {
  return (
    <section>
      <Move />
    </section>
  );
}

export default App;
