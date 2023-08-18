import { useState } from 'react';
import { useLocation, Form } from 'react-router-dom';

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
  Paper,
  Typography,
  CircularProgress,
  Tooltip,
} from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const genreChoosable = [
  'Action',
  'Adventure',
  'RPG',
  'Open World',
  'First Person Shooter',
  'Simulation',
  'Puzzlers',
];
const platformChoosable = ['Switch', 'PS5', 'PC', 'Xbox Series X'];
const playModeChoosable = ['Single-Player', 'Multi-Player', 'Offline', 'Online'];
const EARLIEST_YEAR = 1990;
const CURRENT_YEAR = new Date().getFullYear();
const MIN_SCORE = 0;
const MAX_SCORE = 100;

const scrollBarStyle = {
  '&::-webkit-scrollbar': {
    width: '0.2em',
  },
  '&::-webkit-scrollbar-track': {
    background: '#19191a',
  },
  '&::-webkit-scrollbar-thumb': {
    bgcolor: '#888',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
  scrollbarGutter: 'stable',
};

const DropdownPaper = ({ children }) => {
  return (
    <Paper
      sx={{
        bgcolor: '#2b2b2a',
        borderRadius: 2,
        '& .MuiAutocomplete-listbox': {
          color: 'white',
          '& .MuiAutocomplete-option': {
            py: 0,
          },
          "& .MuiAutocomplete-option[aria-selected='true']": {
            bgcolor: '#424140',

            '&.Mui-focused': {
              bgcolor: '#424140',
            },
          },
        },
        '& .MuiAutocomplete-listbox .MuiAutocomplete-option.Mui-focused': {
          bgcolor: '#403f3e',
        },
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: '250px',
        ...scrollBarStyle,
      }}
    >
      {children}
    </Paper>
  );
};

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
      PaperComponent={DropdownPaper}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={<CheckBoxIcon fontSize='small' />}
            checked={selected}
            sx={{
              color: '#B7B7B7',
              '&.Mui-checked': {
                color: '#cfcecc',
              },
            }}
          />
          {option}
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Select ${categoryName}`}
          placeholder={`${categoryName}`}
          InputLabelProps={{ sx: { color: '#808080' } }}
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
              borderRadius: '8px',
              bgcolor: '#b47bff',
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
            borderRadius: '4px',
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
    <FormGroup sx={{ borderWidth: '2px', borderColor: '#B7B7B7', borderRadius: '4px' }}>
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
                  sx={{
                    float: 'right',
                    color: '#B7B7B7',
                    '&.Mui-checked': {
                      color: '#cfcecc',
                    },
                  }}
                />
              }
              label={`${option}`}
              labelPlacement='start'
              sx={{
                m: 0,
                float: 'right',
                '.MuiFormControlLabel-label': { fontSize: '12px', color: '#808080' },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
};

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}

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
      <Typography sx={{ display: 'inline', float: 'left', color: '#808080' }}>
        {rangeName}
      </Typography>
      <Typography sx={{ display: 'inline', float: 'right' }}>
        {range[0]} - {range[1]}
      </Typography>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay='auto'
        min={min}
        max={max}
        step={step}
        slots={{
          valueLabel: ValueLabelComponent,
        }}
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

export const AdvanceGameSearchBox = ({ extraSx }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const [genres, setGenres] = useState(query.has('genres') ? query.get('genres').split(',') : []);
  const [platforms, setPlatforms] = useState(
    query.has('platforms') ? query.get('platforms').split(',') : [],
  );
  const [modes, setModes] = useState(query.has('modes') ? query.get('modes').split(',') : []);
  const [releaseDateRange, setRelesaeDateRange] = useState(
    query.has('releaseDate')
      ? query.get('releaseDate').split(',').map(Number)
      : [EARLIEST_YEAR, CURRENT_YEAR],
  );
  const [scoreRange, setScoreRange] = useState(
    query.has('score') ? query.get('score').split(',').map(Number) : [MIN_SCORE, MAX_SCORE],
  );

  const handleReset = () => {
    setGenres([]);
    setPlatforms([]);
    setModes([]);
    setRelesaeDateRange([EARLIEST_YEAR, CURRENT_YEAR]);
    setScoreRange([MIN_SCORE, MAX_SCORE]);
  };

  return (
    <Box
      sx={{
        ...extraSx,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderRadius: 2,
        p: '15px',
        gap: '10px',
        bgcolor: '#343c48',
        fontFamily: 'dmsans',
        overflowX: 'hidden',
        overflowY: 'auto',
        ...scrollBarStyle,
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
      <MultiDropdownSelector
        categoryName='Mode'
        options={playModeChoosable}
        searchOption={modes}
        setSearchOption={setModes}
      />
      {/* <MultiCheckboxSelector
        options={playModeChoosable}
        searchOption={modes}
        setSearchOption={setModes}
      /> */}
      <RangeSelector
        rangeName='Time period'
        min={EARLIEST_YEAR}
        max={CURRENT_YEAR}
        step={1}
        minDist={0}
        range={releaseDateRange}
        setRange={setRelesaeDateRange}
      />
      <RangeSelector
        rangeName='Score'
        min={MIN_SCORE}
        max={MAX_SCORE}
        step={5}
        minDist={5}
        range={scoreRange}
        setRange={setScoreRange}
      />
      <Grid container spacing={'10px'}>
        <Grid item md={6}>
          <Button
            variant='contained'
            fullWidth
            onClick={handleReset}
            sx={{
              bgcolor: 'transparent',
              color: '#f2f3ee',
              ':hover': {
                bgcolor: 'rgba(183, 183, 183, 0.5)',
                color: '#f2f3ee',
              },
              border: '1px solid #f2f3ee',
              borderRadius: '3.2px',
            }}
          >
            Reset
          </Button>
        </Grid>
        <Grid item md={6}>
          {/* This GET form will submit a query and redirect to gameSearchResultPage */}
          <Form action='/search' style={{ height: '100%' }}>
            <input
              name='genres'
              value={genres.join(',')}
              readOnly
              disabled={genres.length === 0}
              style={{ display: 'none' }}
            />
            <input
              name='platforms'
              value={platforms.join(',')}
              readOnly
              disabled={platforms.length === 0}
              style={{ display: 'none' }}
            />
            <input
              name='modes'
              value={modes.join(',')}
              readOnly
              disabled={modes.length === 0}
              style={{ display: 'none' }}
            />
            <input
              name='releaseDate'
              value={releaseDateRange.join(',')}
              readOnly
              disabled={
                releaseDateRange[0] === EARLIEST_YEAR && releaseDateRange[1] === CURRENT_YEAR
              }
              style={{ display: 'none' }}
            />
            <input
              name='score'
              value={scoreRange}
              readOnly
              disabled={scoreRange[0] === MIN_SCORE && scoreRange[1] === MAX_SCORE}
              style={{ display: 'none' }}
            />
            <Button
              variant='contained'
              fullWidth
              type='submit'
              sx={{
                bgcolor: '#f2f3ee',
                color: '#0d0c11',
                height: '100%',
                ':hover': {
                  bgcolor: 'transparent',
                  color: '#f2f3ee',
                },
                border: '1px solid #f2f3ee',
                borderRadius: '3.2px',
              }}
            >
              Submit
            </Button>
          </Form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdvanceGameSearchBox;
