'use client';

import {memo, useCallback, useState} from "react";

let savedHandler;
function Child({handler}) {
		const [childValue, setChildValue] = useState(1);
		console.log('Child Render');
		if (!savedHandler) {
				savedHandler = handler;
		}
		console.log('is same ', savedHandler == handler);
		return (<div>
				childValue {childValue}
				<button onClick={handler}>Child btn</button>
				<button onClick={() => setChildValue(2)}>Child Click</button>
		</div>);
}
Child = memo(Child);
export default function CallbackHookDemo() {
		console.log('Parent Render');
		const [count, setCount] = useState(0);
		const callBack = () => {
				console.log('Parent callback');
		}
		const handler = useCallback(() => {
				console.log('Parent callback');
		}, []);
	return (<div>
			Count {count}
			{/*<Child handler={callBack}/>*/}
			<Child handler={handler}/>
			<button onClick={() => setCount(count + 1)}>Parent btn</button>
	</div>);
}