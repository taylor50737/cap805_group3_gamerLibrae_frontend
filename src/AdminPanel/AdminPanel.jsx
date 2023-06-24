import GameTab from './GameTab';
import ActionButton from './components/ActionButton';
import NewButton from './components/NewButton';

export default function AdminPanel() {
  const tabs = [
    { name: 'Game', link: '/' },
    { name: 'Member', link: '/' },
    { name: 'Comment', link: '/' },
    { name: 'Review', link: '/' },
    { name: 'Report', link: '/' },
  ];
  const games = [
    {
      _id: '1',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '2',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '3',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '4',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '5',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '6',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
    {
      _id: '7',
      name: 'Diablo 4',
      developer: 'Blizzard',
      publisher: 'admin',
      releaseDate: 'June 6th, 2023',
      gener: ['arpg'],
      platform: ['pc', 'xbox', 'playstation'],
      status: 'public',
      publishedDate: 'Jun 14th, 2023',
    },
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
            placeholder='Type here'
            className='input-bordered input w-full max-w-xs'
          />
        </div>
        <GameTab games={games} />
      </div>
    </div>
  );
}
