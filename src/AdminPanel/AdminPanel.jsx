import GameTab from './GameTab';
import UserTab from './UserTab';
import ActionButton from './components/ActionButton';
import NewButton from './components/NewButton';
import { games, users } from './tempData';

export default function AdminPanel() {
  const tabs = [
    { name: 'Game', link: '/' },
    { name: 'Member', link: '/' },
    { name: 'Comment', link: '/' },
    { name: 'Review', link: '/' },
    { name: 'Report', link: '/' },
  ];

  return (
    <div className='m-10'>
      {/* Admin Panel */}
      <div className='m-auto'>
        <div className='tabs tabs-boxed flex justify-around'>
          {tabs.map((tab) => (
            <a className='tab' key={tab.name}>
              {tab.name}
            </a>
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
        <GameTab games={games} />
        <UserTab users={users} />
      </div>
    </div>
  );
}
