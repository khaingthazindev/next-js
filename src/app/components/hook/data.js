let cache = new Map();

export function fetchData(url) {
		if (!cache.has(url)) {
				cache.set(url, getData(url));
		}
		return cache.get(url);
}

async function getData(url) {
		if (url.startsWith('/search?q=')) {
				return await getSearchResult(url.slice('/search?q='.length));
		} else {
				throw Error('Not Implemented.');
		}
}

async function getSearchResult(query) {
		console.log('query ', query);
		// add a fake delay to make waiting noticeable
	await new Promise(resolve => {
			setTimeout(resolve, 1000);
	});
	const allAlbums = [
			{
					id: 13,
					title: 'Let it be',
					year: 1970,
			},
			{
					id: 12,
					title: 'Abbey Road',
					year: 1969,
			},
			{
					id: 11,
					title: 'Yellow submarine',
					year: 1969,
			},
			{
					id: 10,
					title: 'The beatles',
					year: 1968,
			},
			{
					id: 9,
					title: 'Blue submarine',
					year: 1969,
			},
			{
					id: 8,
					title: 'Sgt Pepper',
					year: 1967,
			},
			{
					id: 7,
					title: 'Revolver',
					year: 1966,
			},
			{
					id: 6,
					title: 'Rubber Soul',
					year: 1965,
			}
	];
	
	const lowerQuery = query.trim().toLowerCase();
	return allAlbums.filter(album => {
			const lowerTitle = album.title.toLowerCase();
			return (
					lowerTitle.startsWith(lowerQuery) || lowerTitle.indexOf(lowerQuery) !== -1
			)
	})
}