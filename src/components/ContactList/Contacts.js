import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contacts/operations';
import { getFilteredContacts } from 'Redux/contacts/selector';
import { IconButton } from 'components/styled/styledMui';
import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, Typography } from '@mui/material';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List sx={{ ml: 'auto', mr: 'auto', width: '48ch' }}>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: 0,
            mb: '16px',
            width: '100%',
          }}
        >
          <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {name}: <span>{number}</span>
          </Typography>

          <IconButton
            variant="outlined"
            type="button"
            aria-label="delete"
            onClick={() => onDelContact(id)}
          >
            {<DeleteIcon />}
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Contacts;
