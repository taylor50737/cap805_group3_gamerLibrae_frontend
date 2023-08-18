import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CommentTab() {
  const fields = ['', 'Index', 'Comment', 'Creator', '#Reports', 'Status'];
  const [isLoading, setIsloading] = useState(true);
  const [comments, setComments] = useState([]);
  const [selectedComments, setSelectedComments] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  const getUser = async (userId) => {
    return fetch(`${import.meta.env.VITE_API_PATH}/api/users/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  };

  const getUserName = async (data) => {
    let newData = [...data]; // Create a new array to avoid mutating the original data
    for (let i = 0; i < newData.length; i++) {
      let userName;
      try {
        const res = await getUser(newData[i].creator);
        const user = await res.json();
        userName = user.user.userName;
        newData[i].creatorName = userName; // Add the 'creatorName' property to the comment object
      } catch (err) {
        console.log(err);
      }
    }
    return newData;
  };

  const getPlainTextFromHTML = async (data) => {
    let newData = [...data]; // Create a new array to avoid mutating the original data
    for (let i = 0; i < newData.length; i++) {
      try {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = newData[i].content;
        const plainTextContent = tempElement.textContent || tempElement.innerText || '';
        newData[i].content = plainTextContent; // Add the 'creatorName' property to the review object
      } catch (err) {
        console.log(err);
      }
    }
    return newData;
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/comments/`);
      let data = await res.json();
      data = await getUserName(data.comments);
      data = await getPlainTextFromHTML(data);
      await setComments(data);
      setIsloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async () => {
    let cid;
    if (selectedComments.length === 0) {
      setSuccessMessage('No content has been selected');
    } else if (selectedComments.length === 1) {
      cid = selectedComments[0];
      try {
        const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/comments/${cid}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        setSelectedComments([]);
        fetchComments();
        setSuccessMessage('Comment deleted');
      } catch (error) {
        console.log(error);
      }
    } else if (selectedComments.length > 1) {
      const cids = { cids: selectedComments };
      try {
        const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/comments/delete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cids),
        });
        const data = await res.json();
        setSelectedComments([]);
        setSuccessMessage('Comments deleted');
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

  useEffect(() => {
    setFilteredComments(comments);
  }, [comments]);

  //Search box
  const [search, setSearch] = useState('');
  const [filteredComments, setFilteredComments] = useState([]);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);

    if (searchWord.trim() === '') {
      // If search input is empty, show all the games (no filter applied)
      setFilteredComments(comments);
    } else {
      // Create a regular expression to match the search word as a whole word
      const regex = new RegExp(`\\b${searchWord}`, 'i');

      // Filter games based on partial word matches
      const filteredComments = comments.filter((comment) => regex.test(comment.creatorName));

      // Update the filteredGames state with the filtered games
      setCurrentPage(1); // Reset to the first page when search changes
      setFilteredComments(filteredComments);
    }
  };

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : filteredComments.slice(indexOfFirstItem, indexOfLastItem);

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
        <input
          type='text'
          value={search}
          placeholder='Search by User'
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
              </th> */}
              {fields.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {/* row */}
            {isLoading ? (
              <tr>
                <td colSpan={fields.length} className='text-center'>
                  <span className='loading loading-spinner loading-lg'></span>
                </td>
              </tr>
            ) : (
              currentItems.map((comment, index) => (
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
                  <td>
                    <Link to={`/profile/${comment.creator}`}>
                      {comment.content.split('. ')[0]}...
                    </Link>
                  </td>
                  <td>{comment.creatorName}</td>
                  <td>{comment.reports?.length || 0}</td>
                  <td>{comment.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {comments.length == 0 ? (
        <div></div>
      ) : (
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
      )}
    </div>
  );
}
