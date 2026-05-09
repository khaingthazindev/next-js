'use client';

import {useRef} from "react";
import ImperativeHandle from "@/app/components/hook/ImperativeHandle";

export default function ImperativeHandleDemo() {
		let ref = useRef(null);
		const onClickHandler = () => {
			ref.current.focus();
				console.log(ref.current.value);
		}
		
		return (<div>
				<ImperativeHandle inputRef={ref} />
			<button onClick={onClickHandler}>Focus</button>
		</div>)
}