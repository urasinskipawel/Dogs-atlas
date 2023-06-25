import { useEffect, useState } from 'react';
import { DogItem } from '../DogItem/DogItem';

import './DogsList.css';
import { Spinner } from '../common/Spinner/Spinner';

export const DogsList = props => {
	const [items, setItems] = useState<[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState('');

	const setView = props.setView;

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const res = await fetch('https://dog.ceo/api/breeds/list/all');
			const data = await res.json();
			const dogsArr = Object.keys(data.message);

			setItems(dogsArr);
			setErr('');
		} catch (err) {
			setErr(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (items === null) {
		return <Spinner />;
	}

	return (
		<ul className='Dogs-list'>
			{items.map(item => (
				<DogItem dog={item} key={crypto.randomUUID()} setView={() => setView(2)} />
			))}
		</ul>
	);
};
