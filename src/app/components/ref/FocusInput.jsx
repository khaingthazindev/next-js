'use client';

import {useRef} from "react";

export default function FocusInput() {
		const inputRef = useRef(null);
		const focusInputHandler = () => {
				inputRef.current.focus();
		}
		return (<div>
				<input type="text" ref={inputRef} />
				<button onClick={focusInputHandler}>Focus Input</button>
		</div>);
}