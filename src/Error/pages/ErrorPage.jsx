import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1 className='text-9xl'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred. </p>
      <p>
        <i className='text-9xl'>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default ErrorPage;
