import { Suspense } from 'react';
import { useLoaderData, Await, useLocation, Link, useNavigation } from 'react-router-dom';

import { Grid, Box, Pagination, PaginationItem, Stack } from '@mui/material';

import AdvanceGameSearchBox from '../shared/components/AdvanceGameSearchBox';
import SortSelector from './components/SortSelector';
import GameResultList from './components/GameResultList';
import GameResultListSkeleton from './components/GameResultListSkeleton';

// key=name to display, value=params in url
const sortOptions = { Score: 'score', 'Release Date': 'releaseDate' };

const GameSearchResultPage = () => {
  const { gamesPromise, headersPromise } = useLoaderData();
  const navigation = useNavigation();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '0', 10);
  const queryWithoutPage = new URLSearchParams(location.search);
  queryWithoutPage.delete('page');

  const gamesSkeleton = (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {Array.from({ length: 5 }, (_, index) => (
        <GameResultListSkeleton key={index} />
      ))}
    </Stack>
  );

  return (
    <Grid container sx={{ mt: 0, mb: 2 }} spacing={'1px'}>
      <Grid item md={12} sx={{ my: 2 }}>
        <Box sx={{ float: 'right', display: 'table' }}>
          <SortSelector sortOptions={sortOptions} query={query} />
        </Box>
      </Grid>

      <Grid item md={3}>
        <Box sx={{ height: '482px' }}>
          <AdvanceGameSearchBox extraSx={{ justifyContent: 'space-between', height: '100%' }} />
        </Box>
      </Grid>

      <Grid item md={9}>
        <Box sx={{ ml: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {navigation.state === 'loading' ? (
            gamesSkeleton
          ) : (
            <Suspense fallback={gamesSkeleton}>
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
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default GameSearchResultPage;
