import { NavLink } from 'react-router-dom';
import Score from '../../../Components/Score';

const ReviewItem = (props) => {
  return (
    <li className='pb-5'>
      <div className='mx-auto max-w-4xl overflow-hidden rounded-xl bg-gray-900 shadow-md'>
        <div className='flex'>
          <div className='shrink-0'>
            <img className='h-56 w-56 object-cover' src={props.imageUrl} alt={props.game} />
          </div>
          <div className='px-8 py-5'>
            <NavLink
              to={`/game/${props.gid}`}
              className='text-sm font-semibold uppercase tracking-wide text-indigo-500 line-clamp-2 hover:underline'
            >
              {props.game}
            </NavLink>
            <NavLink
              to={`/review/${props.rid}`}
              className='mt-1 text-lg font-medium leading-tight text-white line-clamp-1 hover:underline'
            >
              {props.reviewTitle}
            </NavLink>
            <p className='mt-2 text-slate-400 line-clamp-1'>{props.date}</p>
            <p className=' text-slate-500 line-clamp-3'>{props.reviewContext}</p>
          </div>
          <div className='shrink-0 px-6 py-14'>
            <Score score={props.score} size={100} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
