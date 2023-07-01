import { useParams } from 'react-router-dom';

import WishListList from '../components/WishList/WishListList';

const DUMMY_WISHLIST = [
  {
    gid: 'g1',
    imageUrl:
      'https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/iQGgKYUg9YwjPVNM0kE8jeRN.jpg',

    title: 'Call of Duty®: Modern Warfare® II',
    description:
      'Call of Duty: Modern Warfare II is a 2022 first-person shooter video game developed by Infinity Ward and published by Activision. It is a sequel to the 2019 reboot, and serves as the nineteenth installment in the overall Call of Duty series. It was released on October 28, 2022 for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S.',
    creator: 'u1',
  },
  {
    gid: 'g2',
    imageUrl:
      'https://images.g2a.com/360x600/1x1x1/the-lord-of-the-rings-gollum-pc-steam-account-account-global-i10000326298016/abfd4110b5e24708b7877ebf',

    title: 'The Lord of the Rings: Gollum',
    description:
      'The Lord of the Rings: Gollum is an action-adventure game developed by Daedalic Entertainment, who also published the game with Nacon. The game, set in the fictional world of Middle-earth created by J. R. R. Tolkien, takes place in between the events of The Hobbit and The Fellowship of the Ring. The player controls Gollum through a series of locations, such as Cirith Ungol, Barad-dûr, and Mirkwood, as he attempts to find Bilbo Baggins and retake the One Ring whilst battling and avoiding Sauron.',
    creator: 'u2',
  },
];

const WishList = () => {
  const userId = useParams().uid;
  const loadedWishList = DUMMY_WISHLIST.filter((wishlist) => wishlist.creator === userId);
  return (
    <div className='rounded-lg bg-gray-700'>
      <div className='p-4'>
        <a
          href='#'
          className='block text-lg font-medium leading-tight text-yellow-400 hover:underline'
        >
          Your Wish List
        </a>
        <p className='mt-2'>
          <WishListList items={loadedWishList} />
        </p>
      </div>
    </div>
  );
};

export default WishList;
