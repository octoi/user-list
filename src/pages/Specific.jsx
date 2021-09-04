import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { users } from '../utils/list.json'
import { useParams } from 'react-router-dom';
import { Container, UserContainer } from '../styled-components/specific';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.3,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    }
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' }
  }
}

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
      className="container order"
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
