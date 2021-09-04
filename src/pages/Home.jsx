import React, { useState } from 'react';
import { users } from '../utils/list.json';
import { Container } from '../styled-components/home';

// components
import Search from '../components/home/Search';
import UserList from '../components/home/UserList';

export default function Home() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Container>
      <Search onChange={sv => setSearchValue(sv)} />
      <UserList users={users} />
    </Container>
  )
}
