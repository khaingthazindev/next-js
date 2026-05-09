'use client';

import Modal from "@/app/components/portal/Modal";
import {createPortal} from "react-dom";

export default function ModalDemo() {
		return (<>
			<h3>Modal Demo</h3>
				{createPortal(<Modal />, document.body)}
		</>);
}