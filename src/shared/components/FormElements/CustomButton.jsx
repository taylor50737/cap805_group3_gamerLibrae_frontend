import { Link } from 'react-router-dom';

import './CustomButton.css';

const CustomButton = ({ ownClass, ...props }) => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`button button--${props.size || 'default'} ${
          props.inverse && 'button--inverse'
        } ${props.danger && 'button--danger'}`}
      >
        {props.children}
      </Link>
    );
  }

  const ownClassName =
    ownClass != (undefined && '')
      ? `button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${
          props.danger && 'button--danger'
        } ${ownClass}`
      : `button button--${props.size || 'default'} ${props.inverse && 'button--inverse'} ${
          props.danger && 'button--danger'
        }`;

  return (
    <button
      className={ownClassName}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
