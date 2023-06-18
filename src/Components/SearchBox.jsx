import {
  Autocomplete,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchBox = () => {
  return (
    <Autocomplete
      disablePortal
      id='search-game'
      size='small'
      forcePopupIcon={false}
      freeSolo={true}
      options={moreGames}
      getOptionLabel={(game) => game.name}
      filterOptions={(games, state) => {
        if (state.inputValue === '') { return []; }
        return games.filter((game) =>
          game.name.toLowerCase().includes(state.inputValue.toLowerCase()),
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='Searching for a game?'
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton size='small' sx={{ pr: 0 }}>
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
            mt: 3.5,
            mx: 2,
            color: 'white',
            width: 350,
            input: {
              '&::placeholder': {
                opacity: 1,
                fontSize: 12,
                color: '#565656',
              },
            },
            '.MuiInputBase-input': {
              height: 8,
            },
            '& .MuiOutlinedInput-root': {
              borderRadius: 40,
              color: 'white',
              fontSize: 12,
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
            <Grid item md={2}>
              <img src={game.image} width='40' height='30' />
            </Grid>

            <Grid item md={8.5}>
              <Typography sx={{ fontSize: 8 }}>
                {game.name}
                <br />
                {game.releaseYear} {game.platform}
                <br />
                {game.developer}
              </Typography>
            </Grid>
            <Grid itemmd={1.5}>{game.rating}</Grid>
          </Grid>
        </li>
      )}
    />
  );
};

const games = [
  {
    image: 'src/assets/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    rating: 95,
  },
  {
    image: 'src/assets/searchBoxMockImage/gollum.jpg',
    name: 'The Lord of the Rings: Gollum',
    releaseYear: '2023',
    platform: 'PS5',
    developer: 'Daedalic Entertainment',
    rating: 30,
  },
  {
    image: 'src/assets/searchBoxMockImage/diablo.jpg',
    name: 'Diablo IV',
    releaseYear: '2023',
    platform: 'Xbox One',
    developer: 'Activision Blizzard',
    rating: 85,
  },
  
];

const moreGames = Array(10).fill(games).flat();

// Long options for testing

export default SearchBox;
