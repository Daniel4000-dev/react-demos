'use client'

import { useState } from "react"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
function App() {
  const [movies, setMovies] = useState([
    {id: 1, title: 'spider man', ratings: 3},
    {id: 2, title: 'super man', ratings: 4}
  ])
  const handleClick = () => {
    setMovies(movies.map(m => m.id === 1 ? { ...movies, ratings: 5 } : m)); 
  }
  return (
    <section>
      {movies.map(m => (
        <li key={Math.random()}>{m.ratings}</li>
      ))}
      <button onClick={handleClick}>change rating</button>
    </section>
  );
}

export default App;
