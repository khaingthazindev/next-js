'use client';

import {Suspense, useDeferredValue, useState} from "react";
import SearchResults from "@/app/components/hook/SearchResults";

export default function SearchResultDemo() {
		const [query, setQuery] = useState('');
		const deferredQuery = useDeferredValue(query); // show old data before getting new data
		return (<div>
				<label>Search albums: </label>
				<input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
				<Suspense fallback={<h2>Loading...</h2>}>
						<SearchResults query={deferredQuery} />
				</Suspense>
		</div>);
}