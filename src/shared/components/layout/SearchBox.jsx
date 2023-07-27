import { useState } from 'react';
import {
  Autocomplete,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Score from '../Score';
import { getGames } from '../../api/games';
import { iso8601dateToString } from '../../util/iso8601dateToString';
import { useDebounce } from '../../hooks/useDebounce';
import { useNavigate, useNavigation } from 'react-router';

export const SearchBox = ({ fullWidth, marginLeft, resultBoxHeight }) => {
  const [value, setValue] = useState(null); //selected value, must be one of options
  const [inputValue, setInputValue] = useState('');
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const debouncedFetchGames = useDebounce(() => {
    if (inputValue === '') {
      setGames([]);
      return;
    }
    const params = new URLSearchParams();
    params.append('name', inputValue);
    getGames(params)
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
      });
  }, 500); // fetch games after no keystroke for 500ms

  const handleChange = (event, newValue) => {
    console.log(`value change`);
    console.log(newValue);
    setValue(newValue);
  };
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    debouncedFetchGames();
  };

  return (
    <Autocomplete
      autoHighlight
      disablePortal
      size='small'
      forcePopupIcon={false}
      freeSolo
      options={games}
      getOptionLabel={(game) => (typeof game === 'string' ? game : game.name)}
      value={value}
      filterOptions={(x) => x}
      onChange={handleChange}
      onInputChange={handleInputChange}
      PaperComponent={({ children }) => <Paper sx={{ bgcolor: '#2b2725' }}>{children}</Paper>}
      ListboxProps={{ sx: { maxHeight: resultBoxHeight ? resultBoxHeight : '370px' } }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: fullWidth ? '100%' : '45%',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Searching for a game?'
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton
                  size='small'
                  sx={{ pr: 0 }}
                  onClick={() => {
                    navigate(`/search?name=${inputValue}`);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size='xs'
                    style={{ color: '#565656' }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            marginLeft: marginLeft ? marginLeft : 0,
            input: {
              '&::placeholder': {
                opacity: 1,
                fontSize: 12,
                color: '#565656',
                fontFamily: 'DM Sans',
              },
            },
            '.MuiInputBase-input': {
              height: 20,
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: 5,
              color: 'white',
              fontSize: 12,
              fontFamily: 'DM Sans',
              '& fieldset': {
                borderColor: '#b7b7b7',
                borderWidth: 1.5,
              },
              '&:hover fieldset': {
                borderColor: '#b7b7b7',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#b7b7b7',
                borderWidth: 1.5,
              },
              '&.MuiInputBase-sizeSmall .MuiAutocomplete-input': {
                pl: 0,
              },
            },
            '.MuiAutocomplete-clearIndicator': {
              color: 'white',
              transform: 'scale(0.75)',
            },
          }}
        />
      )}
      renderOption={(props, game) => (
        <li {...props} key={game.name}>
          <Grid container>
            <Grid item xs={2} sm={2} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
              <Paper sx={{ width: 45, height: 60 }}>
                <img
                  src={`https://res.cloudinary.com/dpfvhna2t/image/upload/${game.portrait}`}
                  width='45'
                  height='60'
                />
              </Paper>
            </Grid>

            <Grid item xs={8} sm={8} md={8}>
              <Typography sx={{ fontSize: 6, fontWeight: 800, color: 'white' }}>
                {game.name}
              </Typography>
              <Typography sx={{ fontSize: 4, color: 'white' }}>
                {iso8601dateToString(game.releaseDate)}
                <br />
                {game.platforms.join(', ')}
                <br />
                {game.developer}
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <Score
                score={typeof game.score === 'number' ? Math.round(game.score) : 'NaN'}
                size={50}
              />
            </Grid>
          </Grid>
        </li>
      )}
    />
  );
};

export default SearchBox;
