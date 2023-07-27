import { useEffect, useState } from 'react';

export default function ReportModal(type, id) {
  const [report, setReport] = useState('');
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (report.length > 0) setEmpty(false);
  }, [report]);

  useEffect(() => {
    setEmpty(report.length === 0);
  }, [report]);

  const handleSubmit = () => {
    setReport('');
  };

  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className='btn rounded-full border-none bg-red-900 hover:bg-red-900'
        onClick={() => window.report_modal.showModal()}
      >
        Report
      </button>
      <dialog id='report_modal' className='modal modal-bottom m-auto max-w-sm sm:modal-middle'>
        <form method='dialog' className='modal-box' onSubmit={handleSubmit}>
          <h3 className='text-lg font-bold'>Report</h3>
          <div className='divider'></div>
          <div className='grid gap-5'>
            <input
              value={report}
              type='text'
              placeholder='Report reason'
              className='input-bordered input w-full max-w-xs'
              onChange={(e) => setReport(e.target.value)}
            />
          </div>
          <div className='divider'></div>
          <div className='grid grid-cols-2 place-content-stretch justify-items-stretch gap-2'>
            <div className='modal-action m-0'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn min-w-full'>Close</button>
            </div>
            <button className='btn' disabled={empty} type='submit'>
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
