import React from 'react';
import style from '../App.module.css';

const Child = (props) => {
  console.log('Child re-runing');

  return <h1 className={style.demoText}>{props.text}</h1>;
};

export default React.memo(Child);
