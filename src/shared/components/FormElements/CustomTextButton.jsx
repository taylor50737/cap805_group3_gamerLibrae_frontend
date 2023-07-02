import { Link } from 'react-router-dom';

import './CustomTextButton.css';

const CustomTextButton = (props) => {
  return (
    <p
      className={`textbutton textbutton--${props.size || 'default'} `}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </p>
  );
};

export default CustomTextButton;
