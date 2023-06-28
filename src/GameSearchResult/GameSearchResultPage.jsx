import { useState } from 'react';
import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../Components/AdvanceGameSearchBox';
import SortSelector from './components/SortSelector';
import GameResultList from './components/GameResultList';

const topGamesItems = [
  {
    id: 1,
    title: 'Street Fighter 6',
    platform: 'PS5',
    releaseDate: 'June 2, 2023',
    genre: 'Fighting',
    mode: 'Multi-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 94,
    imgSrc: 'src/assets/topGames/streetFighter6.jpg',
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    platform: 'PC',
    releaseDate: 'March 24, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 93,
    imgSrc: 'src/assets/topGames/residentEvil4.jpg',
  },
  {
    id: 3,
    title: 'Dead Space',
    platform: 'Xbox Series X',
    releaseDate: 'January 27, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 92,
    imgSrc: 'src/assets/topGames/deadSpace.jpg',
  },
  {
    id: 4,
    title: 'Hi-Fi RUSH',
    platform: 'PC',
    releaseDate: 'January 25, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 90,
    imgSrc: 'src/assets/topGames/hifiRush.jpg',
  },
  {
    id: 5,
    title: 'Persona 4 Golden',
    platform: 'Switch',
    releaseDate: 'Jan 19, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 89,
    imgSrc: 'src/assets/topGames/p4g.jpg',
  },
  {
    id: 6,
    title: 'Dead Cells: Return to Castlevania',
    platform: 'PC',
    releaseDate: 'March 6, 2023',
    genre: 'Fighting',
    mode: 'Single-Player',
    tags: ['Adventure', 'Fight', 'Funny'],
    score: 88,
    imgSrc: 'src/assets/topGames/deadCell.jpg',
  },
];

const GameSearchResultPage = () => {
  const [games, setGames] = useState(topGamesItems);

  const handleSortBy = (newGames) => {
    setGames(newGames);
  };

  return (
    <Grid container sx={{ mt: 0, mb: 2 }} spacing={'15px'}>
      <Grid item md={12}>
        <Box sx={{ float: 'right', display: 'table' }}>
          <SortSelector games={games} handleSortBy={handleSortBy} />
        </Box>
      </Grid>

      <Grid item md={3}>
        <AdvanceGameSearchBox />
      </Grid>

      <Grid item md={9} sx={{}}>
        <Box sx={{ ml: 4 }}>
          <GameResultList games={games} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameSearchResultPage;
