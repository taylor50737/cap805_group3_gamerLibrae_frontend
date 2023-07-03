import { useParams } from 'react-router-dom';

import ReviewList from './ReviewList';

const DUMMY_REVIEWS = [
  {
    rid: 'r1',
    gid: 'g1',
    game: 'The Legend of Zelda: Tears of the Kingdom',
    score: 96,
    reviewTitle: 'Best Game Ever.',
    reviewContext:
      'The current paragon of role-playing titles and open worlds, The Witcher: Wild Hunt is a game for the ages; a rich and immersive world full of significant decisions and a feeling of intelligent and epic fantasy. Peerless.',
    imageUrl:
      'https://assets-prd.ignimgs.com/2022/09/14/zelda-tears-of-the-kingdom-button-2k-1663127818777.jpg',
    comments: 5,
    date: 'Mar 13, 2022',
    creator: 'u1',
  },
  {
    rid: 'r2',
    gid: 'g2',
    game: 'The Witcher 3',
    score: 40,
    reviewTitle: 'Probably the worst game I’ve ever played in my entire life!',
    reviewContext:
      'How come they manage to make such a good looking game but suck at making good combat? Seriously? Jump with B? And run with A? It’s just so boring. In GOW4 i actually love to looking forward to fight but here I just Try to avoid it cuz blocking is so incredibly hard considering you have to stand still to be able to block, go on downvote me. Won’t matter and won’t change my opinion',
    imageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
    comments: 0,
    date: 'May 26, 2023',
    creator: 'u1',
  },
  {
    rid: 'r3',
    gid: 'g3',
    game: 'Mario Kart 8',
    score: 40,
    reviewTitle: 'Worst Game Ever',
    reviewContext:
      'It seems that Nintendo Switch was made for a game like Mario Kart 8 Deluxe. Racing is fun and multiplayer (8 local/12 online) is unbeatable. Nevertheless, the only improvements from the Wii U game are six new characters, new items and some battle modes, and that is not enough.',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BNjFmODJlMDItNTRjYi00NjYxLWI3YjgtMTE5Yjg4Y2U4MDFhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg',
    comments: 2,
    date: 'May 26, 2023',
    creator: 'u2',
  },
  {
    rid: 'r4',
    gid: 'g4',
    game: 'Call of Duty®: Modern Warfare® II',
    score: 100,
    reviewTitle: 'BEST GAME EVER.',
    reviewContext:
      'Oh Baby A Triple! Call of Duty: Modern Warfare II is an exceptional game and a worthy successor. The game exhibits extraordinary graphics and realism that many fans seek. It is more of the same seen in the franchise over the years but with refined features. All the added game modes and the content that is to come promises to give us long but entertaining hours immersed in the game.',
    imageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/iQGgKYUg9YwjPVNM0kE8jeRN.jpg',
    comments: 3,
    date: 'Oct 27, 2021',
    creator: 'u2',
  },
];

const ReviewHistory = () => {
  const userId = useParams().uid;
  const loadedReviews = DUMMY_REVIEWS.filter((review) => review.creator === userId);
  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='flex flex-col items-center px-5 pt-5'>
        <h2 className='pb-2 text-3xl'>Reviews History</h2>
        <div className='mt-2'>
          <ReviewList items={loadedReviews} />
        </div>
      </div>
    </div>
  );
};

export default ReviewHistory;
