import { useState } from 'react';

export default function GameTab({ games }) {
  const fields = ['ID', 'Game', 'Developer', 'Publisher', 'Release Date', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = games.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(games.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {currentItems.map((game) => (
              <tr key={game._id}>
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
      {/* Pagination */}
      <div className='join'>
        <button className='btn-ghost join-item btn'>«</button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={
              pageNumber === currentPage
                ? 'btn-ghost btn-active join-item btn'
                : 'btn-ghost join-item btn'
            }
          >
            {pageNumber}
          </button>
        ))}
        <button className='btn-ghost join-item btn'>»</button>
      </div>
    </div>
  );
}
