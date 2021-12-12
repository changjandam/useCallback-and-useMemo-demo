import React from 'react';
import {demoText} from './Text.module.css';

const Text = (props) => {
  console.log('Text ran');

  return <h1 className={demoText}>{props.text}</h1>;
};

export default Text;
