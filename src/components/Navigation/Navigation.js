import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { List, ListItem } from '@mui/material';
import { Button } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <List sx={{ display: 'flex' }}>
        <ListItem color="secondary">
          <Button component={NavLink} to="/" color="inherit">
            Home
          </Button>
        </ListItem>

        {isLoggedIn && (
          <ListItem>
            <Button component={NavLink} to="/contacts" color="inherit">
              Contacts
            </Button>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
