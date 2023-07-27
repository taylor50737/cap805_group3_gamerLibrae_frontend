import { Suspense } from 'react';

import { useLoaderData, Await } from 'react-router-dom';
import Info from './components/Info';
import ReviewSection from './components/ReviewSection';
import ErrorPage from '../Error/pages/ErrorPage';

const GamePage = () => {
  const { gamePromise } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={gamePromise} errorElement={<ErrorPage />}>
        {(game) => (
          <>
            <Info game={game} />
            <ReviewSection reviews={game.reviews} />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default GamePage;
