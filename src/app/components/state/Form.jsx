'use client';

import {useState} from "react";

export default function Form() {
		let [ price, setPrice ] = useState(0);
		let [ qty, setQty ] = useState(0);
		
		return (<div>
				<form action="">
						<div>Price <input type={ 'text' } value={ price } onChange={(e) => setPrice(e.target.value)} /></div>
						<div>Qty <input type={ 'text' } value={ qty } onChange={(e) => setQty(e.target.value)} /></div>
						<div>Total { price * qty }</div>
					</form>
		</div>);
}