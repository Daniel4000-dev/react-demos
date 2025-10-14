'use client'

import { useState } from "react"
import ComponentTwo from "./components/ComponentTwo"
import CompOne from "./components/CompOne"
import Exone from "./components/Exone"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
function App() {
 const [count, setCount] = useState(0);
  return (
    <section>
      <Exone />
    </section>
  );
}

export default App;
