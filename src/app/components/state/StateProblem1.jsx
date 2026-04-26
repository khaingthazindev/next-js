'use client';

import {useState} from "react";

export default function StateProblem1() {
		console.log('StateProblem1 render')
		const [ number, setNumber ] = useState(0);
		
		return (<>
			<h1>{ number }</h1>
				<button onClick={ () => {
						// setNumber(number + 1);
						// setNumber(number + 3);
						setNumber((number) => number + 1)
						setNumber((number) => number + 1)
						
				} }>+3</button>
		</>);
}