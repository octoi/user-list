import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../utils/list.json'
import { useParams } from 'react-router-dom';

export default function Specific() {
  const history = useHistory();

  const params = useParams();
  const userId = params.userId;
  const user = users[userId];

  useEffect(() => {
    if (!user) history.push('/');
  }, [user, history])

  return (
    <div>
      <h2>{user?.name}</h2>
    </div>
  )
}
