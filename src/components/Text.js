import React from 'react';
import style from '../App.module.css';

const Text = (props) => {
  console.log('Text ran');

  return <h1 className={style.demoText}>{props.text}</h1>;
};

export default Text;
