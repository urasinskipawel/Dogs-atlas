import { useEffect, useState } from 'react';
import { DogItem } from '../DogItem/DogItem';
import { Spinner } from '../common/Spinner/Spinner';

import './DogsList.css';

interface DogsList {
	dog: string;
}

export const DogsList = () => {
	const [dogs, setDogs] = useState<DogsList | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetch('https://dog.ceo/api/breeds/list/all');
			const data = await res.json();
			setDogs(data.message);
		})();
	}, []);

	if (dogs === null) {
		return <Spinner />;
	}

	return (
		<ul className='Dogs-list'>
			{Object.keys(dogs).map(dog => (
				<DogItem dog={dog} key={crypto.randomUUID()} />
			))}
		</ul>
	);
};
