import { useState } from 'react'
const Exone = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10
        return initialCount
    })

    const increment = () => setCount(prevCount => prevCount + 1);
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default Exone