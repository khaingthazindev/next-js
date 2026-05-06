'use client';

import {useState} from "react";

function factorial(n)
{
		console.log('compute fun ', n);
		let result = 1;
		for (let i = 1; i <= n; i++) {
				result *= i;
		}
		return result;
}

export default function CallbackHookDemo() {
		console.log('CallbackHookDemo Render');
		let [n, setN] = useState(0);
		let fac = factorial(n);
	return (<div>
			<input type="text" value={n} onChange={(event) => setN(event.target.value)} />
			<br />Factorial {fac}
	</div>);
}