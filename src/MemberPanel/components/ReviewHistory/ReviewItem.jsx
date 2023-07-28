import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Score from '../../../shared/components/Score';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { iso8601dateToString } from '../../../shared/util/iso8601dateToString';

const ReviewItem = (props) => {
  const [loadedGame, setLoadedGame] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const htmlString = props.reviewContext;

  const getPlainTextFromHTML = (htmlString) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent || tempElement.innerText || '';
  };

  const plainText = getPlainTextFromHTML(htmlString);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const responseData = await sendRequest(
          `${import.meta.env.VITE_API_PATH}/api/games/${props.game}`,
        );
        setLoadedGame(responseData);
      } catch (err) {}
    };
    fetchReviews();
  }, [sendRequest, props.game]);

  return (
    <li className='pb-5'>
      {!isLoading && loadedGame && (
        <div className='mx-auto max-w-4xl overflow-hidden rounded-xl bg-gray-900 shadow-md'>
          <div className='flex'>
            <div className='shrink-0'>
              <img
                className='h-56 w-56 object-cover'
                src={`https://res.cloudinary.com/dpfvhna2t/image/upload/${loadedGame.portrait}`}
                alt={loadedGame.name}
              />
            </div>
            <div className='px-8 py-5'>
              <NavLink
                to={`/game/${props.gid}`}
                className='line-clamp-2 text-sm font-semibold uppercase tracking-wide text-indigo-500 hover:underline'
              >
                {loadedGame.name}
              </NavLink>
              <Link
                to={`/game/${props.gid}/review/${props.rid}`}
                className='mt-1 line-clamp-1 text-lg font-medium leading-tight text-white hover:underline'
              >
                {props.reviewTitle}
              </Link>
              <p className='mt-2 line-clamp-1 text-slate-400'>{iso8601dateToString(props.date)}</p>
              <p className=' line-clamp-3 text-slate-500'>{plainText}</p>
            </div>
            <div className='shrink-0 px-6 py-14'>
              <Score score={props.score} size={100} />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default ReviewItem;
