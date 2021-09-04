import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { users } from '../utils/list.json'
import { useParams } from 'react-router-dom';
import { Container, UserContainer } from '../styled-components/specific';

export default function Specific() {
  const history = useHistory();

  const params = useParams();
  const userId = params.userId;
  const user = users[userId];

  useEffect(() => {
    if (!user) history.push('/');
  }, [user, history])

  return (
    <Container>
      <UserContainer >
        <img className='banner' src={user?.image} alt={user?.name} />
        <div className='user'>
          <img src={user?.image} alt={user?.name} />
          <h2>{user?.name}</h2>
        </div>
        <div className='content'>
          <p>Lorem ex duis ex cupidatat aute pariatur eu do veniam excepteur aliqua nulla. Esse tempor et deserunt ullamco officia culpa Lorem fugiat ut sunt sint qui id. Non ad consequat cupidatat dolor labore. Ea fugiat eu veniam fugiat eiusmod reprehenderit amet Lorem pariatur est tempor ex consectetur. Veniam incididunt ex commodo ipsum reprehenderit anim aute pariatur amet deserunt culpa proident sint. Est dolor adipisicing quis reprehenderit Lorem consequat culpa est nisi cupidatat culpa amet labore labore. Consequat ipsum adipisicing aliqua voluptate cillum eiusmod culpa ut nostrud occaecat.</p>
        </div>
      </UserContainer>
    </Container>
  )
}
