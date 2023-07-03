import { Card } from '@mui/material';

import WishListItem from './WishListItem';

const WishListList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No Wish list found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((wishItem) => (
        <WishListItem
          key={wishItem.gid}
          id={wishItem.gid}
          imageUrl={wishItem.imageUrl}
          game={wishItem.title}
          description={wishItem.description}
        />
      ))}
    </ul>
  );
};

export default WishListList;
