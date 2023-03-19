import LoginForm from '../../components/LoginForm/LoginForm';
// import Section from 'components/Section/Section';
import { Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

const LoginPages = () => {
  return (
    <>
      <Helmet>
        <title>log in</title>
      </Helmet>
      <Typography
        component="h2"
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        Log in
      </Typography>
      <LoginForm />
    </>
  );
};

export default LoginPages;
