'use client';

import {useState} from "react";

export default function Counter() {
		console.log('Counter Render');
	let [ count, setCount ] = useState(0);
	let [ another, setAnother ] = useState(2);
	const clickHandler = () => {
			setCount(count + 1);
			console.log('inc ', count);
	}
		const clickHandler2 = () => {
				setAnother(another + 2);
				console.log('setAnother ', another);
		}
	return (<div>
		<h3>{ count }</h3>ww
			<h3>Another is { another }</h3>
			<button onClick={ clickHandler }>+</button>
			<button onClick={ clickHandler2 }>Inc</button>
	</div>);
}