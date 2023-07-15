import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CommentTab({ reviews }) {
  const fields = ['Index', 'Comment', 'Creator', '#Reports', 'Status'];

  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/comments/');
      const data = await res.json();
      setComments(data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async () => {
    let cid;
    if (selectedComments.length === 0) {
      return 'no comment selected';
    } else if (selectedComments.length === 1) {
      cid = selectedComments[0];
      try {
        const res = await fetch(`http://localhost:8080/api/comments/${cid}`, { method: 'DELETE' });
        const data = await res.json();
        console.log(data);
        fetchComments();
      } catch (error) {
        console.log(error);
      }
    } else if (selectedComments.length > 1) {
      const cids = { cids: selectedComments };
      try {
        const res = await fetch('http://localhost:8080/api/comments/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cids),
        });
        const data = await res.json();
        console.log(data);
        fetchComments();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    fetchComments();
  }, []);

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

  return (
    <div>
      <div className='flex justify-end gap-5'>
        <div className='dropdown-bottom dropdown'>
          <label tabIndex={0} className='btn-primary btn'>
            Action
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box z-[1] w-52 bg-black p-2 shadow'
          >
            {/* <li>
          <a>Edit</a>
        </li> */}
            <li>
              <button onClick={() => deleteComment()}>Delete</button>
            </li>
          </ul>
        </div>
        <input type='text' placeholder='Search' className='input-bordered input w-full max-w-xs' />
      </div>
      <div className='m-3 overflow-x-auto'>
        <table className='table'>
          {/* head */}
          <thead>
            <tr>
              <th>
                <input
                  type='checkbox'
                  className='checkbox'
                  checked={selectedComments.length === comments.length}
                  onChange={() => {
                    if (selectedComments.length === comments.length) {
                      setSelectedComments([]);
                    } else {
                      setSelectedComments(comments.map((comment) => comment.id));
                    }
                  }}
                />
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
                  <input
                    type='checkbox'
                    className='checkbox'
                    checked={selectedComments.includes(comment.id)}
                    onChange={() => {
                      if (selectedComments.includes(comment.id)) {
                        setSelectedComments((prevSelectedComments) =>
                          prevSelectedComments.filter((id) => id !== comment.id),
                        );
                      } else {
                        setSelectedComments((prevSelectedComments) => [
                          ...prevSelectedComments,
                          comment.id,
                        ]);
                      }
                    }}
                  />
                </th>
                <td>{indexOfFirstItem + index + 1}</td>
                <Link to={`/profile/${comment.commentUserId}`}>
                  <td>{comment.comment.split('. ')[0]}...</td>
                </Link>
                <td>{comment.creator}</td>
                <td>{comment.reports.length}</td>
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
