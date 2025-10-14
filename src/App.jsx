'use client'

import { useState } from "react"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
function App() {
  const [count, setCount] = useState(0);
   console.log(count)
   const increment = () => setCount(count + 1)
   const decrement = () => setCount(count - 1)
  return (
    <section>
     <h1>{count}</h1>
     <button onClick={increment}>+</button>
     <button onClick={decrement}>-</button>
    </section>
  );
}

export default App;
