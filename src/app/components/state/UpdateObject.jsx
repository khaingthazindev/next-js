'use client';

import {useState} from "react";

export default function UpdateObject() {
		let [ state, setState ] = useState({
				name: 'Someone',
				age: 30
		});
		const clickHandler = () => {
				setState({...state, age: state.age + 1});
		}
		return (<div>
				Name {state.name}
				Age {state.age}
				
				<button type={ 'button' } onClick={ clickHandler }>Update</button>
		</div>);
}