// input -> url
// output -> loading, data

import {useEffect, useState} from "react";

export default function useFetch(url) {
		const [loading, setLoading] = useState(true);
		const [data, setData] = useState([]);
		
		useEffect(() => {
				fetch(url)
						.then(res => {
								return res.json()
						})
						.then(data => {
								setData(data);
								setLoading(false);
						})
				.catch(e => console.log('error ', e));
		}, []);
		
		return [loading, data];
}