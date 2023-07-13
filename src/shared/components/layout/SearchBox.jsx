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

const games = [
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/gollum.jpg',
    name: 'The Lord of the Rings: Gollum',
    releaseYear: '2023',
    platform: 'PS5',
    developer: 'Daedalic Entertainment',
    score: 30,
  },
  {
    image: '/images/searchBoxMockImage/diablo.jpg',
    name: 'Diablo IV',
    releaseYear: '2023',
    platform: 'Xbox One',
    developer: 'Activision Blizzard',
    score: 65,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom1',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom2',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom3',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom4',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom5',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom6',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
  {
    image: '/images/searchBoxMockImage/zelda.jpg',
    name: 'The Legend of Zelda: Tears of the Kingdom7',
    releaseYear: '2023',
    platform: 'Switch',
    developer: 'Nintendo EPD',
    score: 95,
  },
];

// TODO: Long options for testing
// const moreGames = Array(10).fill(games).flat();

export const SearchBox = ({ fullWidth, marginLeft, resultBoxHeight }) => {
  return (
    <Autocomplete
      autoHighlight
      disablePortal
      size='small'
      forcePopupIcon={false}
      freeSolo
      options={games}
      getOptionLabel={(game) => (typeof game === 'string' ? game : game.name)}
      filterOptions={(games, state) => {
        if (state.inputValue === '') {
          return [];
        }
        return games.filter((game) =>
          game.name.toLowerCase().includes(state.inputValue.toLowerCase()),
        );
      }}
      PaperComponent={({ children }) => <Paper sx={{ bgcolor: '#2b2725' }}>{children}</Paper>}
      ListboxProps={{ sx: { maxHeight: resultBoxHeight ? resultBoxHeight : '500px' } }}
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
            <Grid item xs={2} sm={2} md={2}>
              <img src={game.image} width='40' height='30' />
            </Grid>

            <Grid item xs={8} sm={8} md={8}>
              <Typography sx={{ fontSize: 8, color: 'white' }}>
                {game.name}
                <br />
                {game.releaseYear} {game.platform}
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
              <Score score={game.score} size={50} />
            </Grid>
          </Grid>
        </li>
      )}
    />
  );
};

export default SearchBox;
