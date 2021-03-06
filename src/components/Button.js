import React from 'react';
import {btn} from './Button.module.css';

const Button = (props) => {
  console.log('Button ran');
  return (
    <button className={btn} onClick={props.onClickHandler}>
      {props.text}
    </button>
  );
};

export default Button;
