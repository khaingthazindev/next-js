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

function TodoList({ todos, deleteTodoHandler }) {
		return (<div>
				{
						todos.map((todo) => <div key={ todo.id }>
								{ todo.title }
								<button type={ 'button' } onClick={ () => deleteTodoHandler(todo.id) }>delete</button>
						
						</div>)
				}
		</div>)
}

function TodoEntry(props) {
		return <>
				<input value={props.value} onChange={props.onChange}/>
				<button type={"button"} onClick={props.onClick}>Add</button>
		</>;
}

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
		
		return (<div>
				Item List
				<TodoEntry value={text} onChange={e => setText(e.target.value)} onClick={addTodoHandler}/>
				<TodoList todos={todos} deleteTodoHandler={ deleteTodoHandler }/>
		</div>);
}