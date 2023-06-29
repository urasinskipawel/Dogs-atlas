import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Btn } from '../common/Btn/Btn';
import { DogImage } from '../DogImage/DogImage';
import { Spinner } from '../common/Spinner/Spinner';
import axios, { AxiosResponse } from 'axios';

import './DogsSearch.css';

interface DogsData {
	message: string[];
}
interface Props {
	clickedValue: string;
}

export const DogsSearch = (props: Props) => {
	const [inputVal, setInputVal] = useState<string>('');
	const [updatedInputVal, setUpdatedInputVal] = useState<string>(inputVal);
	const [image, setImage] = useState<string | null>(null);
	const [err, setErr] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { clickedValue } = props;

	const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
		setInputVal(e.target.value);
	};

	const sendForm = (e: FormEvent) => {
		e.preventDefault();
	};

	const takeData = async (value: string): Promise<void> => {
		setIsLoading(true);
		try {
			const res: AxiosResponse<DogsData> = await axios.get(`https://dog.ceo/api/breed/${value}/images`);
			const data: DogsData = await res.data;
			const imgArr: string[] = data.message;
			setImage(imgArr[Math.floor(Math.random() * imgArr.length)]);
			setErr('');
		} catch (err) {
			setErr('The breed you provided does not exist');
			setImage(null);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (clickedValue) {
			takeData(clickedValue);
		}
	}, [clickedValue]);

	const handleClick = () => {
		setUpdatedInputVal(inputVal);
		takeData(inputVal);
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
