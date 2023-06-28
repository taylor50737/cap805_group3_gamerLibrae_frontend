import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className='space-y-2 font-medium'>
      {/* <li>
        <NavLink
          to=''
          exact
          className='flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
        >
          <i className="fa-solid fa-desktop" />
          <span className='ml-4'>Main Panel</span>
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to='change-info'
          className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'
        >
          <i className='fa-solid fa-gear' />
          <span className='ml-4'>Change Info</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='reset-password'
          className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'
        >
          <i className='fa-solid fa-lock' />
          <span className='ml-4'>Password</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='upload-profile-pic'
          className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'
        >
          <i className='fa-solid fa-upload' />
          <span className='ml-4'>Upload Profile Picture</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='wishlist'
          className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'
        >
          <i className='fa-solid fa-book' />
          <span className='ml-4'>Wish List</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
