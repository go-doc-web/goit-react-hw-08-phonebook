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
import { ToastContainer } from 'react-toastify';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
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
          <Avatar sx={{ m: 1, bgcolor: 'yellow', color: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
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
                  autoComplete="given-name"
                  type="text"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  variant="standard"
                  onChange={e => setName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  type="email"
                  fullWidth
                  id="email"
                  label="Email "
                  name="email"
                  autoComplete="email"
                  variant="standard"
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'blue' }}
            >
              Registration
            </Button>
          </Box>
        </Box>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default RegisterForm;
{
  /* <Box
      component="form"
      sx={{
        width: '48ch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: '32px',
        ml: 'auto',
        mr: 'auto',
      }}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-adornment-name">
          Name
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-name"
          variant="standard"
          type="text"
          value={name}
          name="name"
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-adornment-email">
          Email
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-email"
          variant="standard"
          type="email"
          value={email}
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl
        sx={{ width: '100%' }}
        variant="standard"
        required
        autoComplete="off"
      >
        <StyledInputLable htmlFor="standard-adornment-password">
          Password
        </StyledInputLable>
        <StyledInput
          id="standard-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={e => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <ColorButton type="submit">Register</ColorButton>
    </Box> */
}
