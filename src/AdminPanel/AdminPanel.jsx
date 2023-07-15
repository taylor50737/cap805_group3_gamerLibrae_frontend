import GameTab from './GameTab';
import UserTab from './UserTab';
import ReviewTab from './ReviewTab';
import CommentTab from './CommentTab';
import ActionButton from './components/ActionButton';
import NewButton from './components/NewButton';
import { games, users, reviews } from './tempData';
import { useState } from 'react';
import ReportTab from './ReportTab';

export default function AdminPanel() {
  const tabs = [
    { name: 'Game', link: '/gameTab' },
    { name: 'User', link: '/userTab' },
    { name: 'Review', link: '/' },
    { name: 'Comment', link: '/' },
    { name: 'Report', link: '/' },
  ];

  const [currentTab, setCurrentTab] = useState('Game');

  const handleChangeTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className='m-10'>
      {/* Admin Panel */}
      <div className='m-auto flex justify-center'>
        <div className='btn-group'>
          {tabs.map((tab) => (
            <button
              className={tab.name === currentTab ? 'btn-primary btn' : 'btn'}
              key={tab.name}
              onClick={() => handleChangeTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className='mx-10 mt-20'>
        <div className='absolute text-xl'>{currentTab}</div>
        {currentTab === 'Game' && <GameTab games={games} />}
        {currentTab === 'User' && <UserTab users={users} />}
        {currentTab === 'Review' && <ReviewTab reviews={reviews} />}
        {currentTab === 'Comment' && <CommentTab reviews={reviews} />}
        {currentTab === 'Report' && <ReportTab reviews={reviews} />}
      </div>
    </div>
  );
}
