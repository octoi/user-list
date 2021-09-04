import React from 'react';

export default function UserList({ users }) {
  return (
    <div>
      {users.map(user => {
        return <div key={user}>
          <h2>{user?.name}</h2>
        </div>
      })}
    </div>
  )
}
