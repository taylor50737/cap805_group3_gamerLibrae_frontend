import { useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

const sortByOptions = ['Score', 'Release Date', 'Popularity'];

const SortSelector = ({ games, handleSortBy }) => {
  const [sortOption, setSortOption] = useState(sortByOptions[0]);

  const handleChange = (event) => {
    setSortOption(event.target.value);
    // Temporary
    handleSortBy(shuffle(games.slice()));
  };

  return (
    <>
      <span style={{ display: 'table-cell', verticalAlign: 'middle', padding: '0px 20px 0px 0px' }}>
        Sort By:
      </span>
      <FormControl sx={{ minWidth: '150px' }}>
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
          {sortByOptions.map((opt, i) => (
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
