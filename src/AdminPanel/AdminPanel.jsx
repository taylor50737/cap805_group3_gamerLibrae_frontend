import GameTab from './GameTab';
import UserTab from './UserTab';
import ActionButton from './components/ActionButton';
import NewButton from './components/NewButton';
import { games, users } from './tempData';
import { useState } from 'react';

export default function AdminPanel() {
  const tabs = [
    { name: 'Game', link: '/gameTab' },
    { name: 'User', link: '/userTab' },
    { name: 'Comment', link: '/' },
    { name: 'Review', link: '/' },
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
              className={tab.name === currentTab ? 'btn-info btn' : 'btn'}
              key={tab.name}
              onClick={() => handleChangeTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className='mx-10 mt-20'>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row items-center gap-4'>
            <div>Game</div>
            <NewButton />
            <ActionButton />
          </div>
          <input
            type='text'
            placeholder='Search'
            className='input-bordered input w-full max-w-xs'
          />
        </div>
        {currentTab === 'Game' && <GameTab games={games} />}
        {currentTab === 'User' && <UserTab users={users} />}
      </div>
    </div>
  );
}
