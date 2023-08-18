import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ReportTab() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [selectedReports, setSelectedReports] = useState([]);

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

  const fetchReports = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reports/`);
      let data = await res.json();
      data = await getUserName(data.reports);
      await setReports(data);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    setFilteredReports(reports);
  }, [reports]);

  //Search box
  const [search, setSearch] = useState('');
  const [filteredReports, setFilteredReports] = useState([]);

  const handleSearch = (e) => {
    const searchWord = e.target.value;
    setSearch(searchWord);

    if (searchWord.trim() === '') {
      // If search input is empty, show all the games (no filter applied)
      setFilteredReports(reports);
    } else {
      // Create a regular expression to match the search word as a whole word
      const regex = new RegExp(`\\b${searchWord}`, 'i');

      // Filter games based on partial word matches
      const filteredReports = reports.filter((report) => regex.test(report.creatorName));

      // Update the filteredGames state with the filtered games
      setCurrentPage(1); // Reset to the first page when search changes
      setFilteredReports(filteredReports);
    }
  };

  const fields = ['ID', 'Report', 'User'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : filteredReports.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(reports.length / itemsPerPage);

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

  const changeReportStatus = async () => {
    let rid;
    if (selectedReports.length === 0) {
      setSuccessMessage('No content has been selected');
    } else if (selectedReports.length === 1) {
      rid = selectedReports[0];
      try {
        const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reports/${rid}`, {
          method: 'PUT',
          body: JSON.stringify({
            status: 'reviewed',
          }),
        });
        const data = await res.json();
        fetchReports();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    console.log(reports);
  }, [reports]);

  return (
    <div>
      <div className='flex justify-end gap-5'>
        {/* <ActionButton selectedComments={selectedComments} /> */}
        {/* <div className='dropdown-bottom dropdown'>
          <label tabIndex={0} className='btn-primary btn'>
            Action
          </label>
          <ul
            tabIndex={0}
            className='dropdown-content menu rounded-box z-[1] w-52 bg-black p-2 shadow'
          >
            <li>
              <button onClick={() => changeReportStatus()}>Reviewed</button>
            </li>
          </ul>
        </div> */}
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
              currentItems.map((report, index) => (
                <tr key={index}>
                  {/* <th>
                    <label>
                      <input
                        type='checkbox'
                        className='checkbox'
                        checked={selectedReports.includes(report.id)}
                        onChange={() => {
                          if (selectedReports.includes(report.id)) {
                            setSelectedReports((prevSelectedReports) =>
                              prevSelectedReports.filter((id) => id !== report.id),
                            );
                          } else {
                            setSelectedReports((prevSelectedReports) => [
                              ...prevSelectedReports,
                              report.id,
                            ]);
                          }
                        }}
                      />
                    </label>
                  </th> */}
                  <td>{indexOfFirstItem + index + 1}</td>
                  <Link to={`/profile/${report.creator}`}>
                    <td>{report.reportContent}</td>
                  </Link>
                  <td>{report.creatorName}</td>
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
