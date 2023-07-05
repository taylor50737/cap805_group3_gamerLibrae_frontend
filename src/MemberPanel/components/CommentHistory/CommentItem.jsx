import { NavLink } from 'react-router-dom';

const CommentItem = (props) => {
  return (
    <li className='pb-5'>
      <div className='mx-auto max-w-5xl overflow-hidden rounded-xl bg-gray-900 shadow-md'>
        <div className='flex'>
          <div className='h-32 w-1/2 px-4 py-7'>
            <div className='flex flex-row'>
              <div className='text-sm'>User: &nbsp;</div>
              <NavLink
                to={`/profile/${props.reviewCreatorId}`}
                className='line-clamp-1 text-sm font-semibold tracking-wide text-indigo-200 hover:underline'
              >
                {props.reviewCreator}
              </NavLink>
            </div>

            <div className='mt-1 flex flex-row'>
              <div className='text-sm'>Game: &nbsp;</div>
              <NavLink
                to={`/game/${props.gid}`}
                className='line-clamp-2 text-sm font-semibold tracking-wide text-indigo-500 hover:underline'
              >
                {props.game}
              </NavLink>
            </div>

            <div className='mt-1 flex flex-row'>
              <div className='text-sm'>Review: &nbsp;</div>
              <NavLink
                to={`/game/${props.gid}/review/${props.reviewId}`}
                className='line-clamp-1 text-sm font-medium tracking-wide text-white hover:underline'
              >
                {props.reviewTitle}
              </NavLink>
            </div>
          </div>
          <div className='w-1/2 px-4 py-4'>
            <p className='mt-2 line-clamp-1 text-sm text-slate-400'>{props.date}</p>
            <p className='text-sm'>Comment:</p>
            <p className=' line-clamp-3 text-slate-500'>{props.commentContext}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommentItem;
