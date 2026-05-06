'use client';

import {useEffect, useState} from "react";

function Todo({ item }) {
		const onClickHandler = (e) => {
		}
		return <div>
				{item.todo}
				<button type={ "button" } onClick={ onClickHandler }>delete</button>
		</div>;
}

function TodoList({ todos }) {
		return (<div>
				{ todos.map((item, index) => <Todo key={index} item={item}/>) }
		</div>);
}

export default function UseEffectDemo() {
		const [todos, setTodos] = useState([]);
		useEffect(() => {
				fetch('https://dummyjson.com/todos')
						.then(res => res.json())
						.then(data => {
								setTodos(data.todos)
						});
		}, []);
		return (<TodoList todos={ todos } />);
}