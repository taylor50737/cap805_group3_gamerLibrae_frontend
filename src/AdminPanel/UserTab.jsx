import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserTab() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/users/`);
      const data = await res.json();
      await setUsers(data.users);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  //Search box
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);

    if (searchWord.trim() === '') {
      // If search input is empty, show all the games (no filter applied)
      setFilteredUsers(users);
    } else {
      // Create a regular expression to match the search word as a whole word
      const regex = new RegExp(`\\b${searchWord}`, 'i');

      // Filter games based on partial word matches
      const filteredUsers = users.filter((user) => regex.test(user.userName));

      // Update the filteredGames state with the filtered games
      setCurrentPage(1); // Reset to the first page when search changes
      setFilteredUsers(filteredUsers);
    }
  };

  const fields = ['ID', 'Username', 'Email', 'Tier', 'Affilate', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

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
        {/* <ActionButton selectedComments={selectedComments} /> */}
        <input
          value={search}
          type='text'
          placeholder='Search User'
          className='input-bordered input w-full max-w-xs'
          onChange={handleSearch}
        />
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
              currentItems.map((user, index) => (
                <tr key={user.userName}>
                  {/* <th>
                    <label>
                      <input type='checkbox' className='checkbox' />
                    </label>
                  </th> */}
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td className='avatar'>
                    <div className='w-8'>
                      <img src={user.avatar} />
                    </div>
                  </td>
                  <Link to={`/profile/${user._id}`}>{user.userName}</Link>
                  <td>{user.email}</td>
                  <td>{user.isAdmin === true ? 'Admin' : 'Member'}</td>
                  <td>{user.joinedAffiliation === true ? 'Yes' : 'No'}</td>
                  <td>{user.status}</td>
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
