import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReviewTab() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reviews/`);
      const data = await res.json();
      console.log(data);
      await setReviews(data.users);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fields = ['Index', 'Review', 'User', 'Game', '#Comments', '#Reports', 'Status'];

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
                      {review.content.split('. ')[0]}...
                    </Link>
                  </td>
                  <td>Get user {review.userId}</td>
                  <td>Get game {review.gameId}</td>
                  <td>{review.comments.length}</td>
                  <td>{review.reviewReportCount}</td>
                  <td>{review.reviewStatus}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
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
  );
}
