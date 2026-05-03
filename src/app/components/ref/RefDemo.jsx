'use client';

import {useRef, useState} from "react";

export default function RefDemo() {
		let [count, setCount] = useState(0);
		let ref = useRef(0);
		const incHandler = () => {
				setCount(count + 1)
		};
		const incLocalHandler = () => {
				ref.current = ref.current + 1;
				console.log('ref current ', ref.current);
		}
		return (<div>
				Counter {count}
				&nbsp;<button type={'button'} onClick={incHandler}>Inc</button>
				&nbsp;<button type={'button'} onClick={incLocalHandler}>Inc Local</button>
		</div>);
}