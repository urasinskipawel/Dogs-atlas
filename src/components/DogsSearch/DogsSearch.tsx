import { useState } from 'react';
import { Btn } from '../common/Btn/Btn';
import { DogImage } from '../DogImage/DogImage';
import { Spinner } from '../common/Spinner/Spinner';
import axios from 'axios';

import './DogsSearch.css';

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
	};

	const takeData = async () => {
		setIsLoading(true);
		try {
			const res = await axios.get(`https://dog.ceo/api/breed/${inputVal}/images`);
			const data = await res.data;
			const imgArr = data.message;
			setImage(imgArr[Math.floor(Math.random() * imgArr.length)]);
			setErr('');
		} catch (err) {
			setErr('The breed you provided does not exist');
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
