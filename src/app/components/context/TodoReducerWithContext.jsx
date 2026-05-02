'use client';

import { todoReducer } from '@/app/components/reducer/TodoListWithReducer'
import {useContext, useReducer, useState} from "react";
import {TodoContext, TodoDispatchContext} from "@/app/components/context/TodoContext";

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

function TodoEntry({ onAdd }) {
		const dispatch = useContext(TodoDispatchContext);
		let [title, setTitle] = useState('');
		const onAddHandler = () => {
				let todo = {
						id: nextId(),
						title
				}
				dispatch({
						type: 'ADD_TODO',
						payload: todo
				});
				setTitle('');
		}
		return (<div>
				New Item
				<input type="text" value={title} onChange={ (e) => setTitle(e.target.value) }/>
				<button type={'button'} onClick={ onAddHandler }>Add</button>
		</div>);
}

function TodoItem({todo}) {
		const dispatch = useContext(TodoDispatchContext);
		const [isEditing, setIsEditing] = useState(false);
		const [title, setTitle] = useState(todo.title);
		const onUpdateHandler = () => {
				setIsEditing(!isEditing);
				if (isEditing) {
						const updateTodo = {
								...todo,
								title: title
						};
						dispatch({
								type: 'UPDATE_TODO',
								payload: updateTodo
						})
				}
		}
		const onDeleteHandler = () => {
			dispatch({
					type: 'DELETE_TODO',
					payload: todo
			})
		}
		return <div>
				{
						isEditing ? <input type={'text'} value={ title } onChange={(e) => setTitle(e.target.value)} /> : todo.title
				}
				&nbsp; <button type={'button'} onClick={ onDeleteHandler }>Delete</button>
				&nbsp; <button type={'button'} onClick={ onUpdateHandler }>{isEditing ? 'Update' : 'Edit'}</button>
		</div>;
}

function TodoList() {
		const todos = useContext(TodoContext);
		return (<div>
				{ todos.map((todo) => <TodoItem key={todo.id} todo={todo} />) }
		</div>);
}

export default function TodoReducerWithContext() {
		const [todos, dispatch] = useReducer(todoReducer, initialTodos);
		return (<div>
				<TodoContext.Provider value={todos}>
						<TodoDispatchContext.Provider value={dispatch}>
								<TodoEntry />
								<TodoList />
						</TodoDispatchContext.Provider>
				</TodoContext.Provider>
		</div>);
}