import * as React from 'react';

export default function GameTab({ games }) {
  const fields = ['ID', 'Game', 'Developer', 'Publisher', 'Release Date', 'Status'];

  return (
    <div>
      <div className='m-3 overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th>
              {fields.map((column) => (
                <th>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {games.map((game) => (
              <tr>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <td>{game._id}</td>
                <td>{game.name}</td>
                <td>{game.developer}</td>
                <td>{game.publisher}</td>
                <td>{game.releaseDate}</td>
                <td>{game.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
