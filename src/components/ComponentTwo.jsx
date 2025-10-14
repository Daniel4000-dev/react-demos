import React from 'react'

const ComponentTwo = ({ count, onClickHandler }) => {
    const handleClick = () => onClickHandler();
  return (
    <>
    <div>{count}</div>
    <button onClick={handleClick}>Increment</button>
    </>
  )
}

export default ComponentTwo