import { Autocomplete, Box, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const genres = [{ name: 'Action' }, { name: 'Adventure' }, { name: 'RPG' }, { name: 'Open World' }];
const platform = [{ name: 'Switch' }, { name: 'PS5' }, { name: 'PC' }];

const MultiSelector = ({ category, options }) => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label={`Select ${category}`} placeholder={`${category}`} />
      )}
      sx={{
        bgcolor: 'grey',
        '.MuiAutocomplete-tag': {
          bgcolor: 'purple',
          fontSize: '12px',
        },
      }}
    />
  );
};

export const AdvanceGameSearchBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: '10px',
        gap: '20px',
        bgcolor: '#292525',
      }}
    >
      <MultiSelector category='Genre' options={genres} />
      <MultiSelector category='Platform' options={platform} />
      <FormGroup sx={{bgcolor: 'grey'}}>
        <FormControlLabel control={<Checkbox sx={{ml: 50}}/>} label='Online' labelPlacement='start'/>
        <FormControlLabel control={<Checkbox /> } label='Offline' labelPlacement='start'/>
      </FormGroup>
    </Box>
  );
};

export default AdvanceGameSearchBox;
