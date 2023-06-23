import {
  Autocomplete,
  Box,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Chip,
  Grid,
  Button,
} from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

const genreChoosable = ['Action', 'Adventure', 'RPG', 'Open World', 'First Person Shooter', 'Simulation', 'Puzzlers'];
const platformChoosable = ['Switch', 'PS5', 'PC', 'Xbox Series X'];
const playModeChoosable = ['Single-Player', 'Offline', 'Multi-Player', 'Online'];
const earliestYear = 1990;
const currentYear = new Date().getFullYear();

const MultiDropdownSelector = ({ categoryName, options, searchOption, setSearchOption }) => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={options}
      getOptionLabel={(option) => option}
      value={searchOption}
      onChange={(event, newValues) => setSearchOption(newValues)}
      popupIcon={<ArrowDropDownIcon sx={{ color: '#b7b7b7' }} />}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            checked={selected}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Select ${categoryName}`}
          placeholder={`${categoryName}`}
          InputLabelProps={{ sx: { color: 'white', '& label.Mui-focused': { color: 'red' } } }}
          sx={{
            '& label.Mui-focused': {
              color: 'white',
            },
          }}
        />
      )}
      renderTags={(selectedTags, getTagProps) =>
        selectedTags.map((tag, i) => (
          <Chip
            key={i}
            variant='outlined'
            label={tag}
            {...getTagProps({ i })}
            sx={{
              border: 'none',
              bgcolor: '#9747ff',
              color: '#ffffff',
              '.MuiChip-label': { fontSize: '12px', px: '8px' },
              '.MuiChip-deleteIcon': { fontSize: '15px' },
            }}
          />
        ))
      }
      sx={{
        '& .MuiOutlinedInput-root': {
          color: 'white',
          '& fieldset': {
            borderWidth: '2px',
            borderRadius: '18px',
            borderColor: '#B7B7B7',
          },
          '&:hover fieldset': {
            borderColor: '#B7B7B7',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#B7B7B7',
          },
        },
        '.MuiAutocomplete-clearIndicator': {
          color: '#B7B7B7',
        },
      }}
    />
  );
};

const MultiCheckboxSelector = ({ options, searchOption, setSearchOption }) => {
  return (
    <FormGroup sx={{ borderWidth: '2px', borderColor: '#B7B7B7', borderRadius: '18px' }}>
      <Grid container>
        {options.map((option, i) => (
          <Grid key={i} item md={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={searchOption.includes(option)}
                  onChange={(event) => {
                    if (searchOption.includes(option)) {
                      // Remove from list
                      setSearchOption(searchOption.filter((o) => o !== option));
                    } else {
                      setSearchOption([...searchOption, option]);
                    }
                  }}
                  sx={{ float: 'right', color: '#B7B7B7' }}
                />
              }
              label={`${option}`}
              labelPlacement='start'
              sx={{ m: 0, float: 'right', '.MuiFormControlLabel-label': { fontSize: '14px' } }}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

const RangeSelector = ({ rangeName, min, max, step, minDist, range, setRange }) => {
  const handleChange = (event, newRange, activeThumb) => {
    if (!Array.isArray(newRange)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newRange[0], range[1] - minDist), range[1]]);
    } else {
      setRange([range[0], Math.max(newRange[1], range[0] + minDist)]);
    }
  };

  return (
    <Box sx={{ px: '10px' }}>
      <span className='float-left'>{rangeName}</span>
      <span className='float-right'>
        {range[0]} - {range[1]}
      </span>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay='auto'
        min={min}
        max={max}
        step={step}
        sx={{
          '.MuiSlider-thumb': {
            color: '#d7dbe0',
            height: 10,
            width: 10,
          },
          '.MuiSlider-track': {
            color: '#adadad',
            height: 5,
          },
          '.MuiSlider-rail': {
            height: 5,
            bgcolor: 'black',
          },
        }}
        disableSwap
      />
    </Box>
  );
};

export const AdvanceGameSearchBox = () => {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [playModes, setPlayModes] = useState([]);
  const [timePeriod, setTimePeriod] = useState([earliestYear, currentYear]);
  const [scoreRange, setScoreRange] = useState([0, 100]);

  const handleReset = () => {
    setGenres([]);
    setPlatforms([]);
    setPlayModes([]);
    setTimePeriod([earliestYear, currentYear]);
    setScoreRange([0, 100]);
  };

  const handleSubmit = () => {
    const values = `
      genres: ${genres}
      platforms: ${platforms}
      playModes: ${playModes}
      timePeriod: ${timePeriod}
      scoreRange: ${scoreRange}
    `;
    console.log(values);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        p: '10px',
        gap: '10px',
        justifyContent: 'space-between',
        bgcolor: '#292525',
        overflowX: 'hidden',
        overflowY: 'scroll',

      }}
    >
      <MultiDropdownSelector
        categoryName='Genre'
        options={genreChoosable}
        searchOption={genres}
        setSearchOption={setGenres}
      />
      <MultiDropdownSelector
        categoryName='Platform'
        options={platformChoosable}
        searchOption={platforms}
        setSearchOption={setPlatforms}
      />
      <MultiCheckboxSelector
        options={playModeChoosable}
        searchOption={playModes}
        setSearchOption={setPlayModes}
      />
      <RangeSelector
        rangeName='Time period'
        min={earliestYear}
        max={new Date().getFullYear()}
        step={1}
        minDist={0}
        range={timePeriod}
        setRange={setTimePeriod}
      />
      <RangeSelector
        rangeName='Score'
        min={0}
        max={100}
        step={5}
        minDist={5}
        range={scoreRange}
        setRange={setScoreRange}
      />
      <Grid container spacing={'10px'}>
        <Grid item md={4}>
          <Button
            variant='contained'
            fullWidth
            onClick={handleReset}
            sx={{ bgcolor: '#D9D9D9', color: '#000000' }}
          >
            Reset
          </Button>
        </Grid>
        <Grid item md={8}>
          <Button
            variant='contained'
            fullWidth
            onClick={handleSubmit}
            sx={{ bgcolor: '#D9D9D9', color: '#000000' }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdvanceGameSearchBox;
