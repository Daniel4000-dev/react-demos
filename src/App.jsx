'use client'

import { useEffect, useState } from "react"
import ComponentTwo from "./components/ComponentTwo"
import CompOne from "./components/CompOne"
import Exone from "./components/Exone"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
const useeffect = "useEffect hook allows you to perform side effects in your components. Some example of side effects are fetching data, directly updating the DOM etc."
function App() {
 const [value, setValue] = useState(0);

 useEffect(() =>{
  console.log("useEffect called");
  document.title = `Increment ${value}`
 })

  return (
    <section>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </section>
  );
}

export default App;
