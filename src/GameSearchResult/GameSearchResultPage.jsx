import { useState, Suspense, useEffect } from 'react';
import { useLoaderData, Await, useLocation, Link, useNavigate, redirect } from 'react-router-dom';

import { Grid, Box, Pagination, PaginationItem } from '@mui/material';

import AdvanceGameSearchBox from '../shared/components/AdvanceGameSearchBox';
import SortSelector from './components/SortSelector';
import GameResultList from './components/GameResultList';

// key=name to display, value=params in url
const sortOptions = { Score: 'score', 'Release Date': 'releaseDate' };

const GameSearchResultPage = () => {
  const { gamesPromise, headersPromise } = useLoaderData();
  const [resultCounts, setResultCounts] = useState(0);
  const [resultLimit, setResultLimit] = useState(1);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '0', 10);

  useEffect(() => {
    const a = async () => {
      const headers = await headersPromise;
      setResultCounts(headers.get('Pagination-Count'));
      setResultLimit(headers.get('Pagination-Limit'));
    };
    a();
  }, [resultCounts, resultLimit]);

  return (
    <Grid container sx={{ mt: 0, mb: 2 }} spacing={'1px'}>
      <Grid item md={12} sx={{ my: 2 }}>
        <Box sx={{ float: 'right', display: 'table' }}>
          <SortSelector sortOptions={sortOptions} query={query} />
        </Box>
      </Grid>

      <Grid item md={3}>
        <AdvanceGameSearchBox />
      </Grid>

      <Grid item md={9}>
        <Box sx={{ ml: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={gamesPromise} errorElement={<p>Error loading</p>}>
              {(g) => {
                return <GameResultList games={g} />;
              }}
            </Await>
            <Pagination
              page={page + 1}
              count={Math.ceil(resultCounts / resultLimit)}
              size='large'
              color='secondary'
              sx={{ mt: 2 }}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/search${item.page === 1 ? '' : `?page=${item.page - 1}`}`}
                  reloadDocument
                  {...item}
                  sx={{ color: 'white', fontWeight: 800 }}
                />
              )}
            />
          </Suspense>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameSearchResultPage;
