import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ReportTab() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reports/`);
      const data = await res.json();
      console.log(data);
      await setReports(data.reports);
      setIsloading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fields = ['ID', 'Report', 'User', 'Status'];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = isLoading ? [] : reports.slice(indexOfFirstItem, indexOfLastItem);

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
              currentItems.map((report, index) => (
                <tr key={index}>
                  <th>
                    <label>
                      <input type='checkbox' className='checkbox' />
                    </label>
                  </th>
                  <td>{indexOfFirstItem + index + 1}</td>
                  <Link to={`/profile/${report.report_userId}`}>
                    <td>{report.reportContent}</td>
                  </Link>
                  <td>{report.creator}</td>
                  <td>{report.status}Reviewed</td>
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
