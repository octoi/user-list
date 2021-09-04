import React from 'react';

export default function UserList({ users }) {
  return (
    <div className='user-list'>
      {users.map(user => {
        return <div key={user}>
          <img src={user?.image} alt={user?.name} />
          <p>{user?.name}</p>
        </div>
      })}
    </div>
  )
}
