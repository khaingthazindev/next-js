'use client';

import useCustomRef from "@/app/components/hook/useCustomRef";

export default function FocusInput() {
		const inputRef = useCustomRef(null);
		const focusInputHandler = () => {
				inputRef.current.focus();
		}
		return (<div>
				<input type="text" ref={inputRef} />
				<button onClick={focusInputHandler}>Focus Input</button>
		</div>);
}