'use client';

import {useEffect, useState} from "react";
import {cleanup} from "next/dist/client/components/segment-cache/lru";

function CurrentTime()
{
		console.log('CurrentTime render');
		const [now, setNow] = useState(new Date());
		
		useEffect(() => {
				console.log('CurrentTime initialized');
		}, []);
		useEffect(() => {
				console.log('useEffect interval');
				let interval = setInterval(() => {
						setNow(new Date());
				}, 1000)
				return function () {
						console.log('useEffect interval return function');
						clearInterval(interval);
				};
		}, []);
		return (<div>
				{ now.toLocaleTimeString() }
				count { count }
				{/*<button onClick={() => setCount(count + 1)}>count {count}</button>*/}
		</div>);
}
export default function WhyCleanUp()
{
		const [show, setShow] = useState(false);
		console.log('show ', show);
		return (<div>
				<input type="checkbox" id='show' onChange={(e) => setShow(e.target.checked)} /> <label htmlFor="show">Show</label>
				{show && <CurrentTime />}
		</div>);
}