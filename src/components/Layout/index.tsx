import React from 'react';
import { Grid } from './styles';

import Logo from '../Logo'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Layout: React.FC = () => {
  return <Grid >
    <Logo/>
    <Sidebar/>
    <Navbar/>
  </Grid>
}

export default Layout;