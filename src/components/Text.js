import React from 'react';
import { text } from './Text.module.css';

const Text = (props) => {
	console.log('Text ran');

	return <h1 className={text}>{props.text}</h1>;
};

export default Text;
