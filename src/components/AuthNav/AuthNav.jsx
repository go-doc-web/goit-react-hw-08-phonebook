import { List, ListItem } from '@mui/material';

import React from 'react';
//Material UI
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem color="secondary">
        <Button component={NavLink} to="/register" color="black">
          Sing Up
        </Button>
      </ListItem>
      <ListItem>
        <Button component={NavLink} to="/login" color="black">
          Log In
        </Button>
      </ListItem>
    </List>
  );
};
export default AuthNav;
