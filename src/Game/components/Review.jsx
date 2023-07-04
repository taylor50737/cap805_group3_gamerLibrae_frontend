import { useState } from 'react';

import Score from '../../Components/Score';
import { Box, Grid, Typography } from '@mui/material';

import penguin from '/src/assets/avatar/penguin.png';
import rabbit from '/src/assets/avatar/rabbit.png';
import dog from '/src/assets/avatar/dog.png';
import Modal from '@mui/material/Modal';

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
    title: 'Worst Game Ever',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, molestias tempore nisi ipsa officiis doloribus doloremque reiciendis voluptas incidunt a nulla illum, libero consequuntur. Porro fugiat eaque iure, quod aperiam nostrum ad debitis minus deserunt eius. Doloremque perspiciatis est vitae, saepe sequi, iste optio nam alias cupiditate similique error provident odio ea fuga quasi asperiores sint perferendis, assumenda quisquam ut quidem totam corporis tempore amet! Aliquam sapiente praesentium cupiditate in, magnam eum! Saepe eos, perferendis aliquid maiores voluptate natus asperiores labore deserunt aut mollitia ducimus quod quae qui vel cupiditate veniam voluptatibus praesentium necessitatibus ut autem ullam eius, architecto expedita.',
    score: 20,
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: '#191720',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Review = () => {
  const [showReview, setShowReview] = useState(false);
  const openReviewHandler = () => setShowReview(true);
  const closeReviewHandler = () => setShowReview(false);
  return (
    <>
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
          <>
            <Modal
              key={i}
              open={showReview}
              onClose={closeReviewHandler}
              sx={{ maxHeight: '100vh', overflowY: 'auto' }}
            >
              <Box sx={style}>
                <Grid
                  container
                  sx={{
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={review.avatar}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      {review.postdate}
                    </Typography>
                  </Grid>
                  <Grid item md={10.5} sx={{ py: '5px' }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '20px' }}>
                      {review.title}
                    </Typography>
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
                <br />
                <Typography>Comments: </Typography>
                {/* Comment 1 */}
                <Grid
                  container
                  sx={{
                    my: '10px',
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={penguin}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
                      orange123
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      May, 16, 2023
                    </Typography>
                  </Grid>
                  <Grid item sx={{ py: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                      No! I dont agree with you! Zelda is the best game ever. You clearly have no
                      idea what you are talking about!!!!!!!!!!!!
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
                  ></Grid>
                </Grid>
                {/* Comment 2 */}
                <Grid
                  container
                  sx={{
                    my: '10px',
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={rabbit}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
                      apple420
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      May, 16, 2023
                    </Typography>
                  </Grid>
                  <Grid item sx={{ py: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                      @orange123 No! Zelda is the worst game ever
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
                  ></Grid>
                </Grid>
                {/* Comment 3 */}
                <Grid
                  container
                  sx={{
                    my: '10px',
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={dog}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
                      kiwi666
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      May, 16, 2023
                    </Typography>
                  </Grid>
                  <Grid item sx={{ py: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>
                      @orange123 @apple420 Can you guys just shut up?
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
                  ></Grid>
                </Grid>
                {/* Comment 4 */}
                <Grid
                  container
                  sx={{
                    my: '10px',
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={penguin}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
                      orange123
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      May, 16, 2023
                    </Typography>
                  </Grid>
                  <Grid item sx={{ py: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>@kiwi666 no you shut up!</Typography>
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
                  ></Grid>
                </Grid>
                {/* Comment 5 */}
                <Grid
                  container
                  sx={{
                    my: '10px',
                    width: '100%',
                    px: '20px',
                    py: '10px',
                    borderWidth: '2px',
                    borderRadius: '14px',
                  }}
                >
                  <Grid item md={10.5}>
                    <img
                      src={rabbit}
                      width={32}
                      height={32}
                      style={{ display: 'inline-block', marginRight: '10px' }}
                    />
                    <Typography
                      sx={{ display: 'inline-block', fontSize: '14px', color: 'darkgray' }}
                    >
                      apple420
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
                    <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                      May, 16, 2023
                    </Typography>
                  </Grid>
                  <Grid item sx={{ py: '5px' }}>
                    <Typography sx={{ fontSize: '14px' }}>@orange no you shut up!</Typography>
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
                  ></Grid>
                </Grid>
              </Box>
            </Modal>
            <Grid
              onClick={openReviewHandler}
              container
              key={i}
              sx={{
                width: '80%',
                px: '20px',
                py: '10px',
                borderWidth: '2px',
                borderRadius: '14px',
                '&:hover': {
                  opacity: [0.9, 0.8, 0.7],
                  cursor: 'pointer',
                },
              }}
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
                <Typography sx={{ fontSize: '14px', color: 'darkgray' }}>
                  {review.postdate}
                </Typography>
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
          </>
        ))}
      </Box>
    </>
  );
};

export default Review;
