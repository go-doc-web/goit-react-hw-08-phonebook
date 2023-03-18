import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../Redux/contacts/filter';
import { getFilter } from '../../Redux/contacts/selector';

import { TextField, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import css from './ContactFilter.module.css';

const ContactFilter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value.toLowerCase()));
  };
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box component="div" sx={{ marginTop: `${matches ? '0px' : '25px'}` }}>
      <Typography
        component="h2"
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        Your contacts
      </Typography>

      <TextField
        fullWidth
        id="filter"
        label="Find me by name"
        name="filter"
        variant="standard"
        onChange={handleFilterChange}
        value={filter}
        sx={{
          '& label': { fontSize: 14 },
        }}
      />
    </Box>
  );
};

export default ContactFilter;

/* 
 <div className="{css.wrapper}">
      <label className={css.titleFilter}>*Find contact by name</label>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        placeholder="Find me"
        value={filter}
      />
    </div>
*/
