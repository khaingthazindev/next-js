'use client';

import {useState} from "react";

export default function WhyRef() {
		let [count, setCount] = useState(0);
		let value = 0;
		const incHandler = () => {
				setCount(count + 1)
		};
		const incLocalHandler = () => {
				value++;
				console.log('local value ', value);
		}
		console.log('Render WhyRef count ', count, ' value ', value);
		return (<div>
				Counter {count} Local Value {value}
				&nbsp;<button type={'button'} onClick={incHandler}>Inc</button>
				&nbsp;<button type={'button'} onClick={incLocalHandler}>Inc Local</button>
		</div>);
}