import Score from '../../Components/Score';
import { Box, Grid, Typography } from '@mui/material';

import penguin from '/src/assets/avatar/penguin.png';
import rabbit from '/src/assets/avatar/rabbit.png';
import dog from '/src/assets/avatar/dog.png';

const reviews = [
  {
    avatar: penguin,
    userName: 'orange123',
    postdate: 'May 12, 2023',
    title: 'Game of the year 2023',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint',
    score: 95,
  },
  {
    avatar: rabbit,
    userName: 'apple420',
    postdate: 'May 14, 2023',
    title: 'Worst than last one',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nemo facere atque mollitia molestiae officiis ad modi aperiam, aspernatur, temporibus in quisquam autem dolores soluta nobis omnis numquam qui! Sint',
    score: 65,
  },
  {
    avatar: dog,
    userName: 'kiwi666',
    postdate: 'May 15, 2023',
    title: '',
    content: 'Boring',
    score: 20,
  },
];

const Review = () => {
  return (
    <Box
      sx={{
        bgcolor: '#191720',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        alignContent: 'space-evenly',
        gap: '20px',
        py: '20px',
      }}
    >
      {reviews.map((review, i) => (
        <Grid
          container
          key={i}
          sx={{ width: '80%', px: '20px', py: '10px', borderWidth: '2px', borderRadius: '14px' }}
        >
          <Grid item md={10.5}>
            <img
              src={review.avatar}
              width={32}
              height={32}
              style={{ display: 'inline-block', marginRight: '10px' }}
            />
            <Typography sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}>
              {review.userName}
            </Typography>
          </Grid>
          <Grid
            item
            md={1.5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%',
            }}
          >
            <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>{review.postdate}</Typography>
          </Grid>
          <Grid item md={10.5} sx={{ py: '5px' }}>
            <Typography sx={{ fontWeight: 800, fontSize: '20px' }}>{review.title}</Typography>
          </Grid>
          <Grid item md={1.5} /> {/* Empty cell */}
          <Grid item md={10.5}>
            <Typography sx={{ fontSize: '14px' }}>{review.content}</Typography>
          </Grid>
          <Grid
            item
            md={1.5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100%',
            }}
          >
            <Score score={review.score} size={100} />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Review;
