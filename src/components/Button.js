import React from 'react';
import style from '../App.module.css'

const Button = (props) => {
  console.log('Button re-running')
  return (<button className={style.btn} onClick={props.onClickHandler}>
    {props.text}
  </button>)
};

export default React.memo(Button);
