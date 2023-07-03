import { useParams } from 'react-router-dom';

import ReviewList from './ReviewList';

const DUMMY_REVIEWS = [
  {
    id: 'r1',
    game: 'The Legend of Zelda: Tears of the Kingdom',
    score: 96,
    reviewTitle: 'Best Game Ever',
    reviewContext: 'This is the best game I have ever played!',
    imageUrl: '/src/assets/GameInfo/zelda_big.jpg',
    comments: 5,
    creator: 'u1',
  },
  {
    id: 'r2',
    game: 'The Witcher 3',
    score: 40,
    reviewTitle: 'Worst Game Ever',
    reviewContext: 'This is the worst game I have ever played!',
    imageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    comments: 0,
    creator: 'u1',
  },
  {
    id: 'r3',
    game: 'Mario Kart 8',
    score: 40,
    reviewTitle: 'Worst Game Ever',
    reviewContext: 'This is the worst game I have ever played!',
    imageUrl:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_2.0/c_scale,w_1100/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453',
    comments: 2,
    creator: 'u2',
  },
  {
    id: 'r4',
    game: 'Call of Duty®: Modern Warfare® II',
    score: 100,
    reviewTitle: 'BEST GAME EVER.',
    reviewContext: 'Oh Baby A Triple!',
    imageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/iQGgKYUg9YwjPVNM0kE8jeRN.jpg',
    comments: 3,
    creator: 'u2',
  },
];

const ReviewHistory = () => {
  const userId = useParams().uid;
  const loadedReviews = DUMMY_REVIEWS.filter((review) => review.creator === userId);
  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='p-4'>
        <a
          href='#'
          className='block text-lg font-medium leading-tight text-yellow-400 hover:underline'
        >
          Your Reviews
        </a>
        <div className='mt-2'>
          <ReviewList items={loadedReviews} />
        </div>
      </div>
    </div>
  );
};

export default ReviewHistory;
