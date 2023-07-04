import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='gradient flex min-h-screen items-center text-white'>
      <div className='container mx-auto flex flex-wrap items-center p-4'>
        <div className='w-full p-4 text-center md:w-5/12'>
          <img src='https://i.ibb.co/G9DC8S0/404-2.png' alt='Not Found' />
        </div>
        <div className='w-full p-4 text-center md:w-7/12 md:text-left'>
          <div className='mb-4 text-xl font-medium md:text-3xl'>
            Looks like you've found the doorway to the great nothing
          </div>
          <div className='mb-8 text-lg'>
            Sorry about that! Please visit our home page to get where you need to go.
          </div>
          <NavLink to='/' className='rounded border border-white p-4'>
            Go Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
