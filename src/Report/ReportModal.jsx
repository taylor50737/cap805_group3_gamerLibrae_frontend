import { useEffect, useState } from 'react';

export default function ReportModal() {
  const [report, setReport] = useState('');
  const [empty, setEmpty] = useState(true);
  useEffect(() => {
    if (report.length > 0) setEmpty(false);
  }, [report]);

  useEffect(() => {
    setEmpty(report.length === 0);
  }, [report]);

  useEffect(() => {
    console.log(report.length);
  }, [report]);
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className='btn-neutral border-none bg-transparent'
        onClick={() => window.report_modal.showModal()}
      >
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='red' className='h-5 w-5'>
          <path d='M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z' />
        </svg>
      </button>
      <dialog id='report_modal' className='modal modal-bottom m-auto max-w-sm sm:modal-middle'>
        <form method='dialog' className='modal-box'>
          <h3 className='text-lg font-bold'>Report</h3>
          <div className='divider'></div>
          <div className='grid gap-5'>
            <input
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
            <button className='btn' disabled={empty}>
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
