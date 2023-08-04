import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReviewTab() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getUser = async (userId) => {
    return fetch(`${import.meta.env.VITE_API_PATH}/api/users/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  const getGame = async (gameId) => {
    return fetch(`${import.meta.env.VITE_API_PATH}/api/games/${gameId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reviews/`);
      let data = await res.json();
      data = await getUserName(data.reviews);
      data = await getGameName(data);
      await setReviews(data);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getUserName = async (data) => {
    let newData = [...data]; // Create a new array to avoid mutating the original data
    for (let i = 0; i < newData.length; i++) {
      let userName;
      try {
        const res = await getUser(newData[i].creator);
        const user = await res.json();
        userName = user.user.userName;
        newData[i].creatorName = userName; // Add the 'creatorName' property to the review object
      } catch (err) {
        console.log(err);
      }
    }
    return newData;
  };

  const getGameName = async (data) => {
    let newData = [...data]; // Create a new array to avoid mutating the original data
    for (let i = 0; i < newData.length; i++) {
      let gameName;
      try {
        const res = await getGame(newData[i].game);
        const game = await res.json();
        gameName = game.name;
        newData[i].gameName = gameName; // Add the 'creatorName' property to the review object
      } catch (err) {
        console.log(err);
      }
    }
    return newData;
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const fields = ['', 'Index', 'Review', 'Creator', 'Game', '#Comments', '#Reports', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : reviews.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

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
        <input type='text' placeholder='Search' className='input-bordered input w-full max-w-xs' />
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
              currentItems.map((review, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type='checkbox' className='checkbox' />
                    </label>
                  </th>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>
                    <Link to={`/game/${review.gameId}/review/${review._id}`}>
                      {review.content.length > 10
                        ? review.content.substring(0, 10) + '...'
                        : review.content}
                    </Link>
                  </td>
                  <td>{review.creatorName}</td>
                  <td>{review.gameName}</td>
                  <td>{review.comments.length}</td>
                  <td>{review.reports.length}</td>
                  <td>{review.status}</td>
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
