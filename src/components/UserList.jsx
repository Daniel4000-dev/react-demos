import React from 'react'

const UserList = () => {
    const users = [
        {
            id: 1,
            name: "Alice",
            email: "25"
        },
        {
            id: 2,
            name: "Bob",
            email: "30"
        },
        {
            id: 3,
            name: "Charlie",
            email: "35"
        },
        {
            id: 4,
            name: "David",
            email: "40"
        }
    ]
  return (
    <div>
        {users.map((users) => (
            <div key={users.id}>
                <h2>{users.name}</h2>
                <p>{users.email}</p>

            </div>
        ))}
    </div>
  )
}

export default UserList