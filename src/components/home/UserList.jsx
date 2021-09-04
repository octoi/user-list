import React from 'react';

export default function UserList({ users }) {
  return (
    <div className='user-list'>
      {users.map((user, idx) => <div key={idx}>
        <img src={user?.image} alt={user?.name} />
        <p>{user?.name}</p>
      </div>
      )}
    </div>
  )
}
