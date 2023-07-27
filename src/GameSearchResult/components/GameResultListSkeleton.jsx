import { Grid, Box, Skeleton } from '@mui/material';

const BGCOLOR = '#282b30';
const GameResultListSkeleton = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      <Grid container sx={{ m: 0, width: '100%', height: '100%' }}>
        {/* Cover image */}
        <Grid item md={3}>
          <Skeleton
            variant='rounded'
            width={160}
            height={200}
            sx={{ bgcolor: BGCOLOR, borderRadius: '14px' }}
          />
        </Grid>

        {/* Information */}
        <Grid item md={7}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              ml: 2,
            }}
          >
            <Skeleton variant='text' sx={{ fontSize: '48px', width: '80%', bgcolor: BGCOLOR }} />
            <Skeleton variant='text' sx={{ fontSize: '24px', width: '80%', bgcolor: BGCOLOR }} />
            <Skeleton variant='text' sx={{ fontSize: '24px', width: '80%', bgcolor: BGCOLOR }} />
            <Skeleton variant='text' sx={{ fontSize: '24px', width: '80%', bgcolor: BGCOLOR }} />
          </Box>
        </Grid>

        {/* Score */}
        <Grid item md={2} sx={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton variant='circular' width={80} height={80} sx={{ bgcolor: BGCOLOR }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameResultListSkeleton;
