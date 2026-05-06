'use client';

import useFetch from "@/app/components/hook/useFetch";
export default function FetchTodo() {
		const [loading, data] = useFetch('https://dummyjson.com/todos');
		console.log(data);
		return (<div>
				{loading ? <div>Loading...</div> : null}
				<ul>
						{ data?.todos?.map((todo) => <li key={todo.id}>{todo.todo}</li>) }
				</ul>
		</div>);
}