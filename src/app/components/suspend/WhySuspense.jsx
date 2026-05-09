'use client';

import {Suspense} from 'react';

async function getData() {
		await new Promise(resolve => setTimeout(resolve, 3000));
		return 'Return value of getData';
}

function Child1() {
		console.log('Child 1 render');
		let data = use(getData());
		return (<div>
				{data}
		</div>);
}

function Child2() {
		console.log('Child 2 render');
		return (<div>
				Child 2
		</div>)
}

export default function WhySuspense() {
		return (<div>
				Parent
				<Suspense fallback={<h2>Loading...</h2>}>
						<Child1 />
				</Suspense>
				<Child2/>
		</div>)
}