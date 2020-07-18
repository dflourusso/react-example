import React from 'react';
import { Grid } from './styles';

import Logo from '../Logo'
import Sidebar from '../Sidebar'

const Layout: React.FC = () => {
  return <Grid >
    <Logo/>
    <Sidebar/>
  </Grid>
}

export default Layout;