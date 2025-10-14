'use client'

import { useState } from "react"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
function App() {
  const [friends, setFriends] = useState(['Alex', 'John']);
  const addOne = () => setFriends([...friends, 'Baan']);
  const removeOne = () => setFriends(friends.filter((f) => f != "John"));
  const updateOne = () => {
    setFriends(friends.map((f) => f === 'Alex' ? 'Alex Smith' : f))
  }
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOne}>Add new friend</button>
      <button onClick={removeOne}>Remove friend</button>
      <button onClick={updateOne}>Update one friend</button>
    </section>
  );
}

export default App;
