import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewButton from './components/NewButton';
import { getGames } from '../shared/api/games';

export default function GameTab({}) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchGames = async () => {
    const searchParams = new URLSearchParams();
    try {
      const result = await getGames(searchParams);
      const data = await result.json();
      await setGames(data);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  //Search box
  const [search, setSearch] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);

    if (searchWord.trim() === '') {
      // If search input is empty, show all the games (no filter applied)
      setFilteredGames(games);
    } else {
      // Create a regular expression to match the search word as a whole word
      const regex = new RegExp(`\\b${searchWord}`, 'i');

      // Filter games based on partial word matches
      const filteredGames = games.filter((game) => regex.test(game.name));

      // Update the filteredGames state with the filtered games
      setCurrentPage(1); // Reset to the first page when search changes
      setFilteredGames(filteredGames);
    }
  };

  //Table variables
  const fields = ['ID', 'Game', 'Developer', 'Publisher', 'Release Date', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGames, setselectedGames] = useState([]);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : filteredGames.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(games.length / itemsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle previous page navigation
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Function to handle next page navigation
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div className='flex justify-end gap-5'>
        <NewButton />
        <div>
          {/* <ActionButton selectedComments={selectedComments} /> */}
          <input
            value={search}
            type='text'
            placeholder='Search Game'
            className='input-bordered input w-full max-w-xs'
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className='m-3 overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type='checkbox' className='checkbox' />
                </label>
              </th> */}
              {fields.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {isLoading ? (
              <tr>
                <td colSpan={fields.length} className='text-center'>
                  <span className='loading loading-spinner loading-lg'></span>
                </td>
              </tr>
            ) : (
              currentItems.map((game, index) => (
                <tr key={game._id}>
                  {/* <th>
                    <label>
                      <input
                        type='checkbox'
                        className='checkbox'
                        data-testid={`selected-game-${game._id}`}
                        checked={selectedGames.includes(game._id)}
                        onChange={() => {
                          if (selectedGames.includes(game._id)) {
                            setselectedGames((prevSelectedGames) =>
                              prevSelectedGames.filter((id) => id !== game._id),
                            );
                          } else {
                            setselectedGames((prevSelectedGames) => [
                              ...prevSelectedGames,
                              game._id,
                            ]);
                          }
                        }}
                      />
                    </label>
                  </th> */}
                  <td data-testid={`selected-game-${index + 1}`}>{indexOfFirstItem + index + 1}</td>
                  <td>
                    <Link to={`/game/${game._id}`}>{game.name}</Link>
                  </td>
                  <td>{game.developer}</td>
                  <td>{game.publisher}</td>
                  <td>{game.releaseDate}</td>
                  <td>{game.status}Public</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className=''>
        <div className='m-auto text-center'>
          <div className='join flex justify-around'>
            <button className='btn-ghost join-item btn' onClick={goToPreviousPage}>
              «
            </button>
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
            <button className='btn-ghost join-item btn' onClick={goToNextPage}>
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
