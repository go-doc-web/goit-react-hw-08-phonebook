import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';

import { AppBar, Box, Container } from '@mui/material';

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar sx={{ pt: '20px', pb: '20px' }} position="static">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Container>
    </AppBar>
  );
};
export default NavBar;
