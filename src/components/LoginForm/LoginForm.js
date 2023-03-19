// import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { ToastContainer } from 'react-toastify';
import {
  Box,
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  TextField,
  Container,
  Button,
} from '@mui/material';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          padding: 4,
          bgcolor: '#fff',
          borderRadius: 4,

          '&:hover': { boxShadow: '0px 0px 42px -20px rgba(0,0,0,0.3)' },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: 'blue',
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={e => setEmail(e.target.value)}
                  required
                  type="email"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={e => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'blue' }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default LoginForm;
