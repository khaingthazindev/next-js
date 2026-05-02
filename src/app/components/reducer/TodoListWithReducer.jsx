'use client';

import {useReducer, useState} from "react";

export function todoReducer(state, action) {
		switch (action.type) {
				case 'ADD_TODO':
						return [...state, action.payload];
						break;
				case 'DELETE_TODO':
						return state.filter(todo => todo.id !== action.payload.id);
						break;
				case 'UPDATE_TODO':
						return state.map(todo => todo.id === action.payload.id ? action.payload : todo);
						break;
				default:
						return state;
		}
}

let initialTodos = [
		{
				"id": 1,
				"title": "Task 1",
		},
		{
				"id": 2,
				"title": "Task 2",
		},
		{
				"id": 3,
				"title": "Task 3",
		},
		{
				"id": 4,
				"title": "Task 4",
		},
		{
				"id": 5,
				"title": "Task 5",
		},
];

let id = 6;
function nextId() {
		return id++;
}

function TodoCount({ count }) {
		return (<div>
				<h3>Todo count { count }</h3>
		</div>)
}

function TodoEntry({ onAdd }) {
		let [title, setTitle] = useState('');
		const onAddHandler = () => {
				onAdd({ id: nextId(), title });
				setTitle('');
		}
	return (<div>
			New Item
			<input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
			<button type={'button'} onClick={ onAddHandler }>Add</button>
	</div>);
}

function TodoItem({todo, onDelete, onUpdate}) {
		const [isEditing, setIsEditing] = useState(false);
		const [title, setTitle] = useState(todo.title);
		const onUpdateHandler = () => {
				setIsEditing(!isEditing);
				if (isEditing) {
						onUpdate({
								...todo,
								title: title
						});
				}
		}
		return <div>
				{
						isEditing ? <input type={'text'} value={ title } onChange={(e) => setTitle(e.target.value)} /> : todo.title
				}
				&nbsp; <button type={'button'} onClick={ () => onDelete(todo) }>Delete</button>
				&nbsp; <button type={'button'} onClick={ onUpdateHandler }>{isEditing ? 'Update' : 'Edit'}</button>
		</div>;
}

function TodoList({ todos, onDelete, onUpdate }) {
		return (<div>
				{ todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={ onDelete } onUpdate={ onUpdate }/>) }
		</div>);
}

export default function TodoListWithReducer() {
		const [todos, dispatch] = useReducer(todoReducer, initialTodos);
		
		const onDeleteHandler = (todo) => {
				dispatch({
						type: 'DELETE_TODO',
						payload: todo
				});
		}
		
		const onAddHandler = (todo) => {
				dispatch({
						type: 'ADD_TODO',
						payload: todo,
				})
				
		}
		
		const onUpdateHandler = (todo) => {
				dispatch({
						type: 'UPDATE_TODO',
						payload: todo
				});
		}
	return (<div>
			<TodoCount count={ todos.length } />
			<TodoEntry onAdd={ onAddHandler } />
			<TodoList todos={ todos } onDelete={ onDeleteHandler } onUpdate={ onUpdateHandler } />
	</div>);
}