import React from 'react';
import { ArrowIcon, Container, Divider, Item, Label } from './styles';


const Sidebar: React.FC = () => {
  return <Container>
    <Divider />
    <Item>
      <Label>Customers</Label>
      <ArrowIcon />
    </Item>
    <Divider />
    <Item>
      <Label>Products</Label>
      <ArrowIcon />
    </Item>
    <Divider />
    <Item>
      <Label>Settings</Label>
      <ArrowIcon />
    </Item>
    <Divider />
    <Item>
      <Label>About</Label>
      <ArrowIcon />
    </Item>
  </Container>
}

export default Sidebar;