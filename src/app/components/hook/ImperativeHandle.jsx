import {useImperativeHandle, useRef} from "react";

export default function ImperativeHandle({inputRef}) {
		const mainInputRef = useRef(null);
		
		useImperativeHandle(inputRef, () => {
				return {
						focus() {
								console.log('main ref focus');
								mainInputRef.current.focus();
						}
				}
		}, []);
		return (<>
				<input type="text" ref={mainInputRef} />
		</>);
}