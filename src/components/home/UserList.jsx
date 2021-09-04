import React from 'react';
import { useHistory } from 'react-router-dom';

export default function UserList({ users }) {
  const history = useHistory();

  return (
    <div className='user-list'>
      {users.map((user, idx) => {
        return <div
          onClick={() => history.push(`/user/${idx}`)}
          key={idx}
        >
          <img src={user?.image} alt={user?.name} />
          <p>{user?.name}</p>
        </div>
      }
      )}
    </div>
  )
}
