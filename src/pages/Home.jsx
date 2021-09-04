import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { users } from '../utils/list.json';
import { containerVariants } from '../utils/constants';
import { Container } from '../styled-components/home';

import Search from '../components/Search';
import UserList from '../components/UserList';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [customUsers, setCustomUsers] = useState(users);

  useEffect(() => {
    if (searchValue === '') {
      setCustomUsers(users);
      return;
    }

    let searchedUsers = users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
    setCustomUsers(searchedUsers);
  }, [searchValue])

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <Search onChange={sv => setSearchValue(sv)} />
        <UserList users={customUsers} />
      </Container>
    </motion.div>
  )
}
