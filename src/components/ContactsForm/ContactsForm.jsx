import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Material UA
import {
  TextField,
  Typography,
  CssBaseline,
  Box,
  Grid,
  Button,
} from '@mui/material';
import { addContact } from '../../Redux/operations';
import { getContacts } from '../../Redux/selectors';

import css from './ContactsForm.module.scss';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const allContacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleReset = () => {
    setName('');
    setPhone('');
  };
  const dublicate = name => {
    const normalisedName = name.toLocaleLowerCase();
    const dublContact = allContacts.find(
      ({ name }) => name.toLowerCase() === normalisedName
    );
    return Boolean(dublContact);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContacts = { name, phone };
    if (dublicate(name)) {
      alert(`${name} is already in contacts`);
      // handleReset();
      return;
    }
    dispatch(addContact(newContacts));
    handleReset();
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        My Phonebook
      </Typography>

      <Box
        sx={{
          padding: 4,
          bgcolor: '#fff',
          borderRadius: 4,

          '&:hover': { boxShadow: '0px 0px 42px -20px rgba(0,0,0,0.3)' },
        }}
      >
        <CssBaseline />
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                // error={nameError}

                type="text"
                required
                fullWidth
                id="name"
                label="Fedor Fedorov"
                name="name"
                variant="outlined"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="tel"
                // error={phoneError}
                required
                fullWidth
                id="number"
                label="Phone"
                name="phone"
                variant="outlined"
                onChange={e => setPhone(e.target.value)}
                value={phone}
                onKeyPress={e => !/[0-9]/.test(e.key) && e.preventDefault()}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            disabled={name.length < 3}
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
          >
            Add contact
            {/* {isLoading && <Spinner size={20} />} */}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactsForm;

/* {
  /* <form onSubmit={handleSubmit} className={css.form}>
  ImSpinner3
      <label className={css.titleInputForm}>
        <span>Name</span>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          placeholder="Fedor Fedorov"
        />
      </label>
      <label className={css.titleInputForm}>
        <span>Number</span>
        <input
          onChange={e => setPhone(e.target.value)}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="227-91-26"
        />
      </label>
      <button type="submit">Add contact</button>
    </form> */
