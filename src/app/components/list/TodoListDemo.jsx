'use client';

function Todo({ item }) {
		const onClickHandler = (e) => {
				console.log('click ', e);
		}
		return <div>
				{item.title}
				<button type={ "button" } onClick={ onClickHandler }>delete</button>
		</div>;
}

function TodoList({ todos }) {
	return (<div>
			{ todos.map((item, index) => <Todo key={index} item={item}/>) }
	</div>);
}

let todos = [
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
export default function TodoListDemo() {
	return (<TodoList todos={ todos } />);
}