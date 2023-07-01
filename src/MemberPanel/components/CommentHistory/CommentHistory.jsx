import { useParams } from 'react-router-dom';

import CommentList from './CommentList';
import ReviewList from '../ReviewHistory/ReviewList';

const DUMMY_COMMENTS = [
  {
    id: 'c1',
    game: 'Mario Kart 8',
    rid: 'r3',
    reviewTitle: 'Worst Game Ever',
    reviewCreator: 'Kuri Fung',
    commentContext: 'No! Mario Kart 8 is the best game I have ever played!',
    creator: 'u1',
  },
  {
    id: 'c2',
    game: 'The Legend of Zelda: Tears of the Kingdom',
    rid: 'r1',
    reviewTitle: 'Best Game Ever',
    reviewCreator: 'Taylor Lo',
    commentContext: 'Nah, this game is so overrated...',
    creator: 'u2',
  },
];

const CommentHistory = () => {
  const userId = useParams().uid;
  const loadedComments = DUMMY_COMMENTS.filter((comment) => comment.creator === userId);
  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='p-4'>
        <a
          href='#'
          className='block text-lg font-medium leading-tight text-yellow-400 hover:underline'
        >
          Your Comments
        </a>
        <div className='mt-2'>
          <CommentList items={loadedComments} />
        </div>
      </div>
    </div>
  );
};

export default CommentHistory;
