'use client';

import {useState} from "react";

let id = 5;
function nextId() {
		return id++;
}
let initTodos = [
		{
				'id': 1,
				'title': 'Task 1',
		},
		{
				'id': 2,
				'title': 'Task 2',
		},
		{
				'id': 3,
				'title': 'Task 3',
		},
		{
				'id': 4,
				'title': 'Task 4',
		},
		
];

export default function UpdateArrayDemo() {
		const [ text, setText ] = useState('');
		let [ todos, setTodos ] = useState(initTodos);
		let addTodoHandler = () => {
				let newTodo = {
						id: nextId(),
						title: text
				}
				// todos.push(newTodo);
				setTodos([...todos, newTodo]);
				setText('');
		}
		let deleteTodoHandler = (id) => {
				// todos.filter returns new array
				setTodos(todos.filter((todo) => todo.id !== id));
		}
		let updateTodoHandler = (todo) => {
				setTodos(todos.filter((todo) => todo.id !== id));
				todo.title = 'Update';
				setTodos(todos.map((td) => td.id === todo.id ? todo : td));
		}
		let sortHandler = (todo) => {
				setTodos([...todos.reverse()]);
		}
		
		return (<div>
				Item List
				<input value={ text } onChange={ e => setText(e.target.value) }/>
				<button type={ 'button' } onClick={ addTodoHandler }>Add</button>
				<button type={ 'button' } onClick={ sortHandler }>Sort</button>
				
				{
						todos.map((todo) => <div key={ todo.id }>
								{ todo.title }
								<button type={ 'button' } onClick={ () => deleteTodoHandler(todo.id) }>delete</button>
								<button type={ 'button' } onClick={ () => updateTodoHandler(todo) }>update</button>
						</div>)
				}
		</div>);
}