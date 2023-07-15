import { Autocomplete, Box, TextField, Checkbox, Chip, Grid, Button, Paper } from '@mui/material';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../../shared/components/FormElements/CustomButton';
import CustomImageUpload from '../../shared/components/FormElements/CustomImageUpload';
import { CustomUseForm } from '../../shared/hooks/form-hook';

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
const playModeChoosable = ['Single-Player', 'Offline', 'Multi-Player', 'Online'];
const earliestYear = 1990;
const currentYear = new Date().getFullYear();

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

const InputField = ({ categoryName }) => {
  return (
    <Box
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
        },
      }}
    >
      <TextField
        label={`${categoryName}`}
        placeholder={`${categoryName}`}
        InputLabelProps={{ sx: { color: '#808080' } }}
        sx={{
          minWidth: '100%',
          '& label.Mui-focused': {
            color: 'white',
          },
        }}
      />
    </Box>
  );
};

const UploadPic = () => {
  const [successSubmission, setSuccessSubmission] = useState('');
  const [formState, inputHandler, setFormData] = CustomUseForm(
    {
      image: {
        value: null,
        isValid: false,
      },
    },
    false,
  );

  const uploadPicSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    setSuccessSubmission('You have successfully changed your password!');
  };

  return (
    <div className='flex max-w-lg flex-col items-center rounded-lg bg-gray-700'>
      {/* <h1 className='text-3xl'>Upload Game Picture</h1> */}
      <form
        className='flex flex-col items-center justify-center py-12'
        onSubmit={uploadPicSubmitHandler}
      >
        <CustomImageUpload center id='image' onInput={inputHandler} />
        <p className=''>{successSubmission}</p>
        <div className='auth--form--submit'>
          <CustomButton type='submit' disabled={!formState.isValid}>
            UPLOAD IMAGE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const AddGameForm = ({ extraSx }) => {
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

  return (
    <div className='sm:flex sm:flex-row sm:justify-center'>
      <UploadPic />
      <Box
        sx={{
          ...extraSx,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 2,
          p: '10px',
          gap: '10px',
          bgcolor: '#',
          overflowX: 'auto',
          overflowY: 'auto',
          ...scrollBarStyle,
        }}
      >
        <InputField categoryName='Game' />
        <InputField categoryName='Developer' />
        <InputField categoryName='Release Date' />
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
          searchOption={playModes}
          setSearchOption={setPlayModes}
        />

        <Grid container spacing={'10px'}>
          <Grid item md={4}>
            <Button
              variant='contained'
              fullWidth
              onClick={handleReset}
              sx={{
                bgcolor: '#D9D9D9',
                color: '#000000',
                ':hover': {
                  bgcolor: '#33353d',
                  color: 'white',
                },
              }}
            >
              Reset
            </Button>
          </Grid>
          <Grid item md={8}>
            <Link to='/admin-panel'>
              <Button
                variant='contained'
                fullWidth
                // onClick={handleSubmit}
                sx={{
                  bgcolor: '#D9D9D9',
                  color: '#000000',
                  ':hover': {
                    bgcolor: '#33353d',
                    color: 'white',
                  },
                }}
              >
                Submit
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddGameForm;
