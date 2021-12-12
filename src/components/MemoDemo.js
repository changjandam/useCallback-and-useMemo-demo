import React from 'react';
import { text } from './MemoDemo.module.css';

const MemoDemo = (props) => {
	const sum = (arr) => {
		console.log('sum ran');

		return arr.reduce((previousValue, currentValue) => previousValue + currentValue);
	};

	return <h1 className={text}>{sum(props.arr)}</h1>;
};

export default React.memo(MemoDemo);
