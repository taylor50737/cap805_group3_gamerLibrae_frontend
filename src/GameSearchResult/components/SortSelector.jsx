import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormControl, Select, MenuItem } from '@mui/material';

const SortSelector = ({ sortOptions }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const [sortOption, setSortOption] = useState(
    // Auto select if url query already contains sort
    query.has('sort') && Object.values(sortOptions).includes(query.get('sort'))
      ? Object.keys(sortOptions).find((key) => sortOptions[key] === query.get('sort'))
      : '',
  );

  const handleChange = (event) => {
    const newOpt = event.target.value;
    setSortOption(newOpt);
    navigate(`?${getNewQueryString(newOpt)}`);
  };

  const getNewQueryString = (opt) => {
    query.delete('sort');
    query.append('sort', sortOptions[opt]);
    return query.toString();
  };

  return (
    <>
      <span style={{ display: 'table-cell', verticalAlign: 'middle', padding: '0px 20px 0px 0px' }}>
        Sort By:
      </span>
      <FormControl sx={{ minWidth: '130px' }}>
        <Select
          value={sortOption}
          onChange={handleChange}
          MenuProps={{
            disableScrollLock: true,
            sx: {
              '.MuiMenu-paper': {
                color: 'white',
                bgcolor: '#2b2b2a',
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: '#424140',
                },
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: '#424140',
                },
              },
            },
          }}
          sx={{
            borderRadius: '30px',
            height: '40px',
            textAlign: 'center',
            color: '#b7b7b7',
            borderWidth: '2px',
            borderColor: ' #b7b7b7',

            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              borderColor: 'rgba(228, 219, 233, 0.25)',
            },

            '.MuiSvgIcon-root ': {
              fill: '#b7b7b7',
            },
          }}
        >
          {Object.keys(sortOptions).map((opt, i) => (
            <MenuItem key={i} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SortSelector;
