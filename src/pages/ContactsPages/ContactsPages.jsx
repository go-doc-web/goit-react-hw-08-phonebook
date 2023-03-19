import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
//Material UI
import { Container, Grid } from '@mui/material';

import ContactForm from '../../components/ContactsForm/ContactsForm';
import ContactFilter from '../../components/ContactFilter/ContactFilter';
import ContactList from '../../components/ContactsList/ContactList';

const ContactsPages = () => {
  return (
    <>
      <Container
        component="main"
        sx={{
          paddingTop: 4,
        }}
      >
        <Grid container columnSpacing={{ sm: 5, md: 10 }}>
          <Grid item xs={12} sm={5}>
            <ContactForm />
          </Grid>

          <Grid item xs={12} sm={7} sx={{}}>
            <ContactFilter />
            <ContactList />
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
      <Outlet />
    </>
  );
};

export default ContactsPages;
