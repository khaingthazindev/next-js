'use client';

import {useReducer} from "react";

function counterReducer(oldState, action) {
	switch(action.type) {
			case 'INC':
					return {
							count: oldState.count + 1
					}
			case 'DEC':
					return {
							count: oldState.count - 1
					}
			default:
					return {
							...oldState,
					}
	}
}

const initState = {
	count: 0,
}
export default function CounterWithReducer(props) {
		const [ state, dispatch ] = useReducer(counterReducer, initState);
		const incHandler = () => {
				dispatch({
						type: 'INC',
				})
		}
		const decHandler = () => {
				dispatch({
						type: 'DEC',
				})
		}
		return (<div>
			Counter
				<button type={ 'button' } onClick={ incHandler }>+</button>
				{state.count}
				<button type={ 'button' } onClick={ decHandler }>-</button>
		</div>);
}