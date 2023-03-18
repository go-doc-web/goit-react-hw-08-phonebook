import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Box, Typography, Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Typography>Welcome, {user.name}!</Typography>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
export default UserMenu;
