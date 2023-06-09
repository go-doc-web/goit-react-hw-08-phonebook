import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Box, Typography } from '@mui/material';
import { ColorButtonMenu } from 'components/styled/styledMui';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';

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
      <ColorButtonMenu variant="outlined" onClick={() => dispatch(logOut())}>
        <ExitToAppRoundedIcon />
      </ColorButtonMenu>
    </Box>
  );
};
export default UserMenu;
