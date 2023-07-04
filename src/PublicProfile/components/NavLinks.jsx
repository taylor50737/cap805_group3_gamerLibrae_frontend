import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
  return (
    <ul className='space-y-2 font-medium'>
      <li>
        <NavLink to='' className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'>
          <i className='fa-solid fa-book' />
          <span className='ml-4'>Reviews and Comments</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='wishlist'
          className='flex items-center rounded-lg p-2 text-white hover:bg-gray-600'
        >
          <i className='fa-solid fa-star' />
          <span className='ml-4'>Wish List</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
