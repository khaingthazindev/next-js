'use client';

import {useState} from "react";
import useCustomRef from "@/app/components/hook/useCustomRef";

export default function RefDemo() {
		let [count, setCount] = useState(0);
		let ref = useCustomRef(0);
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