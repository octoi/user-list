import React from 'react';
import { users } from '../utils/list.json'
import { useParams } from 'react-router-dom';

export default function Specific() {
  const params = useParams();
  const userId = params.userId;

  const user = users[userId];

  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  )
}
