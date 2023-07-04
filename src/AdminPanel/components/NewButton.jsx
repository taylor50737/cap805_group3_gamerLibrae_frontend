import { Link } from 'react-router-dom';

export default function NewButton() {
  return (
    <div>
      <Link to='/add-game'>
        <button className='btn-primary btn'>+ New</button>
      </Link>
    </div>
  );
}
