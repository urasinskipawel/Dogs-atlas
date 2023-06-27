import { DogsList } from '../DogsList/DogsList';
import { SetViewFunction } from '../../types/dogs-data';

import './DogsListBox.css';

interface Props {
	setView: SetViewFunction;
}

export const DogsListBox = (props: Props) => {
	const { setView } = props;
	return (
		<div id='scrollableDiv'>
			<DogsList setView={setView} />
		</div>
	);
};
