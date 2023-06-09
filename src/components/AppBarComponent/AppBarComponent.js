import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

import { AppBar, Box, Container } from '@mui/material';

const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar
      sx={{ pt: '10px', pb: '10px', backgroundColor: 'blue' }}
      position="static"
    >
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
export default AppBarComponent;
