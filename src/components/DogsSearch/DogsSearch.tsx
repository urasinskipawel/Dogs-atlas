import { useState } from 'react';
import { Btn } from '../common/Btn/Btn';
import './DogsSearch.css';
import { DogImage } from '../DogImage/DogImage';
import { Spinner } from '../common/Spinner/Spinner';

export const DogsSearch = () => {
	const [inputVal, setInputVal] = useState('');
	const [updatedInputVal, setUpdatedInputVal] = useState(inputVal);
	const [image, setImage] = useState(null);
	const [err, setErr] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleInputValue = event => {
		setInputVal(event.target.value);
	};

	const sendForm = e => {
		e.preventDefault();
		console.log('wyslano !');
	};

	const takeData = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(`https://dog.ceo/api/breed/${inputVal}/images`);
			if (!res.ok) {
				throw new Error(`The breed you provided does not exist`);
			}
			const data = await res.json();
			const imgArr = data.message;
			setImage(imgArr[Math.floor(Math.random() * imgArr.length)]);
			setErr('');
		} catch (err) {
			setErr(err.message);
			setImage(null);
		} finally {
			setIsLoading(false);
		}
	};

	const handleClick = () => {
		setUpdatedInputVal(inputVal);
		takeData();
	};

	return (
		<div className='DogsSearch'>
			<form onSubmit={sendForm}>
				<input
					type='text'
					name='dogsSearch'
					onChange={handleInputValue}
					value={inputVal}
					placeholder="Type dog's breed..."
				/>
			</form>
			<Btn name={'Search'} handleClick={handleClick} />
			{isLoading && <Spinner />}
			{err && <h2>{err}</h2>}
			<DogImage src={image} alt={inputVal} />
		</div>
	);
};
