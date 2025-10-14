'use client'

import { useState } from "react"

const state = "states are used to store and manage data that chnage over time and affect how components are rendered"
const hooks = "hooks are special functions added in react 16.8 that allow you to use state and other React features in functional components"
const usestate = "useState hook allows us to track state in a functional component. state generally refers to data or properties that need to be tracked in an application."
function App() {
  const [movie, setMovie] = useState({
    title: 'Equalizer 3',
    ratings: 7,
  });
  const handleClick = () => {
    const copyMovie = {
      ...movie,
      ratings: 5
    }

    setMovie(copyMovie)
  }
  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <p>Rating; {movie.ratings}</p>
      <button onClick={handleClick}>change rating</button>
    </section>
  );
}

export default App;
