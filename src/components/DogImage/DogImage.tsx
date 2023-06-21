import { useEffect, useState } from 'react';
import './DogImage.css';

interface DogImage {
	image: string;
}

export const DogImage = () => {
	const [image, setImage] = useState<DogImage | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetch('https://dog.ceo/api/breed/african/images');
			const data = await res.json();
			const imgArr = data.message;
			setImage(imgArr[Math.floor(Math.random() * imgArr.length)]);
		})();
	}, []);

	if (image === null) {
		return <p>Wczytywanie danych...</p>;
	}

	return (
		<div className='DogImage'>
			<img src={image} alt='' />
		</div>
	);
};
