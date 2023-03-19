import { Box } from '@mui/material';
import Section from 'components/Section/Section';

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
      <Section title="Welcome to Phone Contacts Data"></Section>
    </Box>
  );
};
export default HomePages;
