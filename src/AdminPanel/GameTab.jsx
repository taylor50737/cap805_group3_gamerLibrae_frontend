import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import NewButton from './NewButton';
import ActionButton from './ActionButton';

export default function GameTab({ games }) {
  const fields = ['', 'ID', 'Game', 'Developer', 'Publisher', 'Release Date', 'Status'];

  return (
    <div>
      <div className='flex flex-col items-center'>
        <div className='m-5 flex w-full items-center justify-between space-x-4 px-8'>
          <div className='flex items-center space-x-4'>
            <div className='font-bold text-white'>Game</div>
            <NewButton />
            <ActionButton />
          </div>
          <input type='text' className='rounded-xl' />
        </div>
        <div className='overflow-x-auto'>
          <table className='table-auto rounded-md border-[15px] border-transparent bg-gray-700 text-white'>
            <thead className='border-b-[30px] border-transparent'>
              <tr>
                {fields.map((field, index) => {
                  if (index === 0) {
                    return <th key={field}></th>;
                  } else {
                    return (
                      <th key={field} className='px-5 py-2 font-bold'>
                        {field}
                      </th>
                    );
                  }
                })}
              </tr>
            </thead>
            <tbody className=''>
              {games.map((game, index) => (
                <tr key={game._id} className={`${index === games.length - 1 ? '' : 'border-b'}`}>
                  <td className='py-2 pl-5 pr-20'>
                    <input type='checkbox' />
                  </td>
                  <td className='px-10 py-2'>{game._id}</td>
                  <td className='px-10 py-2'>{game.name}</td>
                  <td className='px-10 py-2'>{game.developer}</td>
                  <td className='px-10 py-2'>{game.publisher}</td>
                  <td className='px-10 py-2'>{game.releaseDate}</td>
                  <td className='px-10 py-2'>{game.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
        <Pagination
          count={10}
          shape='rounded'
          size='large'
          className='bg-transparent text-white'
          classes={{
            ul: 'bg-transparent text-white',
            root: 'bg-transparent text-white',
            page: 'bg-gray-500 hover:bg-gray-600',
            outlined: 'bg-transparent border border-white',
            rounded: 'rounded-full',
            sizeLarge: 'px-4 py-2 text-lg',
            shapeRounded: 'rounded-full',
          }}
        />
      </div>
    </div>
  );
}
