import { FormControl } from '@mui/material';
import { StyledInput, StyledInputLable } from 'components/styled/styledMui';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/contacts/filter';
import { getFilter } from 'Redux/contacts/selector';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };
  const filter = useSelector(getFilter);

  return (
    <FormControl
      sx={{ width: '48ch', mr: 'auto', ml: 'auto' }}
      variant="standard"
      autoComplete="off"
    >
      <StyledInputLable htmlFor="standard-search-by-name">
        Find me *
      </StyledInputLable>
      <StyledInput
        id="standard-search-by-name"
        type="search"
        name="filterContact"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </FormControl>
  );
};

export default Filter;
