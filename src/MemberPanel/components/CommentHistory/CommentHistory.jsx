import { useParams } from 'react-router-dom';

import CommentList from './CommentList';

const DUMMY_COMMENTS = [
  {
    cid: 'c1',
    gid: 'g3',
    game: 'Mario Kart 8',
    rid: 'r3',
    reviewTitle: 'Mario Kart 8 is the best game I’ve ever played in my entire life!',
    reviewCreatorId: 'u2',
    reviewCreator: 'mwinsom3',
    commentContext: 'No! Mario Kart 8 is the worst game I have ever played!',
    date: 'Jun 27, 2023',
    creator: 'u1',
  },
  {
    cid: 'c2',
    gid: 'g4',
    game: 'Call of Duty®: Modern Warfare® II',
    rid: 'r4',
    reviewTitle: 'BEST GAME EVER.',
    reviewCreatorId: 'u2',
    reviewCreator: 'mwinsom3',
    commentContext: 'This game is full of hackers, how can you even play this game.',
    date: 'Jun 27, 2023',
    creator: 'u1',
  },
  {
    cid: 'c3',
    gid: 'g1',
    game: 'The Legend of Zelda: Tears of the Kingdom',
    rid: 'r1',
    reviewTitle: 'Best Game Ever',
    reviewCreatorId: 'u1',
    reviewCreator: 'bdearden0',
    commentContext:
      "Nah, I don't agree with you...this game is so overrated...probably the worst game I have ever played",
    date: 'Jul 3, 2023',
    creator: 'u2',
  },
  {
    cid: 'c4',
    gid: 'g2',
    game: 'The Witcher 3',
    rid: 'r1',
    reviewTitle: 'Probably the worst game I’ve ever played in my entire life!',
    reviewCreatorId: 'u1',
    reviewCreator: 'bdearden0',
    commentContext:
      'Yes, I agree with you...this game is so overrated...probably the worst game I have ever played',
    date: 'May 1, 2023',
    creator: 'u2',
  },
];

const CommentHistory = () => {
  const userId = useParams().uid;
  const loadedComments = DUMMY_COMMENTS.filter((comment) => comment.creator === userId);
  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='flex flex-col items-center px-5 pt-5'>
        <h2 className='pb-2 text-3xl'>Comments History</h2>
        <div className='mt-2'>
          <CommentList items={loadedComments} />
        </div>
      </div>
    </div>
  );
};

export default CommentHistory;
