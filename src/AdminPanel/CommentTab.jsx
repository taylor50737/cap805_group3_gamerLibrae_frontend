import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CommentTab({ reviews }) {
  const fields = ['Index', 'Comment', 'User', '#Reports', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Filter out all comments
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const extractedComments = [];

    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      const reviewComments = review.comments;

      if (reviewComments) {
        for (let j = 0; j < reviewComments.length; j++) {
          const comment = reviewComments[j];
          extractedComments.push(comment);
        }
      }
    }

    setComments(extractedComments);
  }, [reviews]);

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = comments.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(comments.length / itemsPerPage);

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

  useEffect(() => {
    console.log(comments);
  }, [comments]);

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
            {currentItems.map((comment, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type='checkbox' className='checkbox' />
                  </label>
                </th>
                <td>{index}</td>
                <td>{comment.comment.split('. ')[0]}...</td>
                <td>{comment.commentUserId}</td>
                <td>{comment.commentReportCount}</td>
                <td>{comment.status}</td>
              </tr>
            ))}
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
