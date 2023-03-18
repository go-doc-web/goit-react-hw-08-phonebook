import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../Redux/selectors';
import { deleteContact } from '../../Redux/operations';

import { Box, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import css from './ContactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const contact = filteredContacts.map(({ id, name, phone }) => (
    <>
      <Box
        component="li"
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography component="p" variant="span" sx={{ width: '45%' }}>
          {name}:
        </Typography>

        <Typography component="p" variant="span" sx={{ textAlign: 'left' }}>
          {phone}
        </Typography>

        <IconButton
          aria-label="delete"
          onClick={() => removeContact(id)}
          sx={{
            marginLeft: '3px',
            '&:hover, &:focus': { bgcolor: '#f3dacf', color: '#d31616' },
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  ));
  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: 1,
        width: '100%',
        marginTop: 2,
      }}
    >
      {contact}
    </Box>
  );
};

export default ContactsList;

// <ul className="list">{contact}</ul>;

/*     <li key={id} className={css.item}>
      {name}: {phone}
      <button
        className={css.btnDelete}
        onClick={() => removeContact(id)}
        type="button"
      >
        X
      </button>
    </li> */
