import {use} from "react";
import {fetchData} from "@/app/components/hook/data";

export default function SearchResults({ query }) {
	if (query === '') {
			return null;
	}
	const albums = use(fetchData(`/search?q=${query}`));
	if (albums.length === 0) {
			return <p>No Match</p>;
	}
	return (
			<ul>
					{albums.map((album) => (
							<li key={album.id}>{album.title}</li>
					))}
			</ul>
	);
}