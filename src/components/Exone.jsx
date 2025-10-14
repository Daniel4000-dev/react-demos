import { useState } from 'react'
const Exone = () => {
    const [count, setCount] = useState(() => Math.floor(Math.random() * 100))

    const gennum = () => {
        const newNum = Math.floor(Math.random() * 100);
    setCount(newNum)
    }
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={gennum}>Generate new randdom numner</button>
    </>
  )
}

export default Exone