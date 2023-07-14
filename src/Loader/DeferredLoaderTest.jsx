import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

const LoaderTest = () => {
  const deferredData = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={deferredData.promise} errorElement={<p>Error loading</p>}>
        {(resBody) =>
          resBody.users.map((user, i) => (
            <ul key={i}>
              <li>
                <p>{user.email}</p>
                <p>{user.userName}</p>
                <p>{user.isAdmin ? 'admin' : 'member'}</p>
              </li>
            </ul>
          ))
        }
      </Await>
    </Suspense>
  );
};

export default LoaderTest;
