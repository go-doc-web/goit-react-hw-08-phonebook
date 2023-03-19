import { Typography, Box } from '@mui/material';

const HomePages = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '36px',
        flexDirection: 'column',
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        Welcome Phonebook
      </Typography>
    </Box>
  );
};
export default HomePages;
