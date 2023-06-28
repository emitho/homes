import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)({
  background: 'black',
});

const Layout = ({ children }) => (
  <div>
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Sovereign Horizon Homes
        </Typography>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </StyledAppBar>
    {children}
  </div>
);

export default Layout;

