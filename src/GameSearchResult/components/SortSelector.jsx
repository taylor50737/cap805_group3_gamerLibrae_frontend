import { useState } from 'react';
import { FormControl, Select, MenuItem, Button, IconButton } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';

const SortSelector = ({ sortOptions, handleSortBy }) => {
  const [sortOption, setSortOption] = useState('');
  const [desc, setDesc] = useState(true);

  const handleChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    handleSortBy(newSortOption, desc);
  };

  const handleReorder = () => {
    const newDesc = !desc;
    setDesc(newDesc);
    handleSortBy(sortOption, newDesc);
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
          {sortOptions.map((opt, i) => (
            <MenuItem key={i} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <IconButton onClick={handleReorder}>
        {desc ? (
          <FontAwesomeIcon icon={faArrowUpWideShort} style={{ color: '#ffffff' }} />
        ) : (
          <FontAwesomeIcon icon={faArrowDownShortWide} style={{ color: '#ffffff' }} />
        )}
      </IconButton>
    </>
  );
};

export default SortSelector;
