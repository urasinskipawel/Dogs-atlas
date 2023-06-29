import { DogsList } from '../DogsList/DogsList';
import { SetViewFunction } from '../../types/dogs-data';

import './DogsListBox.css';

interface Props {
	setView: SetViewFunction;
	handleDogClickedValue: (dogName: string) => void;
}

export const DogsListBox = (props: Props) => {
	const { setView, handleDogClickedValue } = props;

	const handleClickedValue = (dogName: string): void => {
		handleDogClickedValue(dogName);
	};

	return (
		<div id='scrollableDiv'>
			<DogsList setView={setView} handleDogClickedValue={handleClickedValue} />
		</div>
	);
};
