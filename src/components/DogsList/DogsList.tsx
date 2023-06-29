import { useEffect, useState } from 'react';
import { DogItem } from '../DogItem/DogItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios, { AxiosResponse } from 'axios';
import { SetViewFunction } from '../../types/dogs-data';

import './DogsList.css';

interface Props {
	setView: SetViewFunction;
	handleDogClickedValue: (dogName: string) => void;
}
interface DogsData {
	message: Record<string, string[]>;
}

export const DogsList = (props: Props) => {
	const [items, setItems] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [err, setErr] = useState<string | unknown>('');
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [lastPosition, setLastPosition] = useState<number>(0);

	const perPage = 15;
	const { setView, handleDogClickedValue } = props;

	const fetchData = async (): Promise<void> => {
		setIsLoading(true);

		try {
			const res: AxiosResponse<DogsData> = await axios.get('https://dog.ceo/api/breeds/list/all');
			const data: DogsData = await res.data;
			const dogsArr: string[] = Object.keys(data.message);
			const slicedArr: string[] = dogsArr.slice(lastPosition, lastPosition + perPage);

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

	const handleClick = (dogName: string): void => {
		handleDogClickedValue(dogName);
	};

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
						<DogItem dog={item} key={crypto.randomUUID()} setView={() => setView(2)} handleClick={handleClick} />
					))}
				</ul>
			</InfiniteScroll>
		</>
	);
};
