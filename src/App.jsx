const Button = () => {
  const handleClick = () => console.log('you clicked me'); 
  return <button onClick={handleClick}>Click Me</button>;
};

function App() {
  return (
    <section>
     <Button />
    </section>
  );
}

export default App;
