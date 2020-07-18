import React from 'react';
import { Container, Title, UserContainer, UserAvatar, UserName } from './styles';

const Navbar: React.FC = () => {
  return <Container>
    <Title>Title example</Title>
    <UserContainer>
      <UserAvatar></UserAvatar>
      <UserName>Daniel</UserName>
    </UserContainer>
  </Container>
}

export default Navbar;