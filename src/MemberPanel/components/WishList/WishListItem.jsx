import { Card } from '@mui/material';

const WishListItem = (props) => {
  return (
    <li>
      <Card>
        <div>
          <img src={props.imageUrl} alt={props.game} />
          <h2>Game title: {props.game}</h2>
          <p>Description: {props.description}</p>
        </div>
      </Card>
    </li>
  );
};

export default WishListItem;
