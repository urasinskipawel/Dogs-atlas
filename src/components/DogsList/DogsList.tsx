import { useEffect, useState } from 'react';
import { DogItem } from '../DogItem/DogItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import './DogsList.css';

export const DogsList = props => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState('');
	const [hasMore, setHasMore] = useState(true);
	const [lastPosition, setLastPosition] = useState(0);

	const perPage = 15;
	const setView = props.setView;

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await axios.get('https://dog.ceo/api/breeds/list/all');
			const data = await res.data;
			const dogsArr = Object.keys(data.message);
			const slicedArr = dogsArr.slice(lastPosition, lastPosition + perPage);

			if (items.length >= dogsArr.length) {
				setHasMore(false);
			} else {
				setTimeout(() => {
					setItems(items.concat(...slicedArr));
				}, 500);
			}

			setLastPosition(lastPosition + perPage);
		} catch (err) {
			setErr(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<InfiniteScroll
				dataLength={items.length}
				next={fetchData}
				hasMore={hasMore}
				loader={<p className='Scroll-paragraph'>Loading..</p>}
				scrollableTarget='scrollableDiv'
				endMessage={
					<a className='Scroll-link' href=''>
						<p className='scroll-paragraph'>You have have already seen all breeds</p>
					</a>
				}>
				<ul className='Dogs-list'>
					{items.map(item => (
						<DogItem dog={item} key={crypto.randomUUID()} setView={() => setView(2)} />
					))}
				</ul>
			</InfiniteScroll>
		</>
	);
};
