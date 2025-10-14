import { useEffect, useState } from 'react'
const Exone = () => {
    const [name, setName] = useState(() => {
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name))
    }, [name]);

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleClear = () => setName('')

  return (
    <>
    <div>Name: {name}</div>
    <input type="text" value={name} onChange={handleChange} placeholder='enter your name' />
    <button onClick={handleClear}>Clear Name</button>
    </>
  )
}

export default Exone