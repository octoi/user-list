import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { users } from '../utils/list.json'
import { containerVariants } from '../utils/constants';
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <Container>
        <UserContainer >
          <img className='banner' src={user?.image} alt={user?.name} />
          <div className='user'>
            <img src={user?.image} alt={user?.name} />
            <h2>{user?.name}</h2>
          </div>
          <div className='content'>
            <p>{user?.description}</p>
          </div>
        </UserContainer>
      </Container>
    </motion.div>
  )
}
