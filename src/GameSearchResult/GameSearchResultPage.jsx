import { useState, Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import AdvanceGameSearchBox from '../shared/components/AdvanceGameSearchBox';
import SortSelector from './components/SortSelector';
import GameResultList from './components/GameResultList';

const sortOptions = ['Score', 'Release Date', 'Popularity'];

const GameSearchResultPage = () => {
  const gamesData = useLoaderData();
  const [games, setGames] = useState([]);

  const handleSortBy = (sortOption, desc) => {
    const clone = structuredClone(games);
    console.log(desc);
    switch (sortOption) {
      // Score
      case sortOptions[0]:
        const scoreSortFunc = desc ? (a, b) => b.score - a.score : (a, b) => a.score - b.score;
        setGames(clone.sort(scoreSortFunc));
        break;

      // Recent
      case sortOptions[1]:
        const releaseDateSortFunc = desc
          ? (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
          : (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate);
        setGames(clone.sort(releaseDateSortFunc));
        break;

      // Popularity
      case sortOptions[2]:
      // TODO?

      default:
        break;
    }
  };

  return (
    <Grid container sx={{ mt: 0, mb: 2 }} spacing={'1px'}>
      <Grid item md={12} sx={{ my: 2 }}>
        <Box sx={{ float: 'right', display: 'table' }}>
          <SortSelector games={games} sortOptions={sortOptions} handleSortBy={handleSortBy} />
        </Box>
      </Grid>

      <Grid item md={3}>
        <AdvanceGameSearchBox />
      </Grid>

      <Grid item md={9} sx={{}}>
        <Box sx={{ ml: 4 }}>
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={gamesData.promise} errorElement={<p>Error loading</p>}>
              {(g) => {
                return <GameResultList games={games} resolvedGames={g} handleSetGames={setGames} />;
              }}
            </Await>
          </Suspense>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameSearchResultPage;
