import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../shared/hooks/useAuth';
import { now } from 'lodash';

export default function ReportModal({ type, id }) {
  const [report, setReport] = useState('');
  const [empty, setEmpty] = useState(true);
  const { ...accountInfo } = useAuth();

  useEffect(() => {
    if (report.length > 0) setEmpty(false);
  }, [report]);

  useEffect(() => {
    setEmpty(report.length === 0);
  }, [report]);

  const handleSubmit = async () => {
    let body;
    if (type === 'review') {
      const reportDateTime = new Date();
      const reportContent = report;
      const creator = accountInfo.userId;
      const review = id;
      const status = 'pending';
      body = {
        reportDateTime: reportDateTime,
        reportContent: reportContent,
        creator: creator,
        review: review,
        status: status,
      };
    } else if (type === 'comment') {
      const reportDateTime = new Date();
      const reportContent = report;
      const creator = accountInfo.userId;
      const comment = id;
      const status = 'pending';
      body = {
        reportDateTime: reportDateTime,
        reportContent: reportContent,
        creator: creator,
        comment: comment,
        status: status,
      };
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_API_PATH}/api/reports/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        console.log(res.json());
      }
    } catch (error) {
      console.log(error);
    }
    setReport('');
  };

  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button onClick={() => window.report_modal.showModal()}>
        <FontAwesomeIcon icon={faFlag} style={{ marginRight: '10px' }} />
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
