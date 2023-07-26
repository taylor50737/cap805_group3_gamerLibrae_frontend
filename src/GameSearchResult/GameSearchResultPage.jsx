import { Suspense } from 'react';
import { useLoaderData, Await, useLocation, Link } from 'react-router-dom';

import { Grid, Box, Pagination, PaginationItem } from '@mui/material';

import AdvanceGameSearchBox from '../shared/components/AdvanceGameSearchBox';
import SortSelector from './components/SortSelector';
import GameResultList from './components/GameResultList';

// key=name to display, value=params in url
const sortOptions = { Score: 'score', 'Release Date': 'releaseDate' };

const GameSearchResultPage = () => {
  const { gamesPromise, headersPromise } = useLoaderData();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '0', 10);
  const queryWithoutPage = new URLSearchParams(location.search);
  queryWithoutPage.delete('page');

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
              {(g) => <GameResultList games={g} />}
            </Await>

            <Await resolve={headersPromise} errorElement={<p>Error loading</p>}>
              {(h) => (
                <Pagination
                  page={page + 1}
                  count={Math.ceil(h.get('Pagination-Count') / h.get('Pagination-Limit'))}
                  size='large'
                  color='secondary'
                  sx={{ mt: 2 }}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/search${
                        item.page === 1
                          ? '?' + queryWithoutPage.toString()
                          : '?' + queryWithoutPage.toString() + '&page=' + (item.page - 1)
                      }`}
                      reloadDocument
                      {...item}
                      sx={{ color: 'white', fontWeight: 800 }}
                    />
                  )}
                />
              )}
            </Await>
          </Suspense>
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameSearchResultPage;
