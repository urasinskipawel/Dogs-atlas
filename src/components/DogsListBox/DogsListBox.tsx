import { DogsList } from '../DogsList/DogsList';

import './DogsListBox.css';

export const DogsListBox = props => {
	const setView = props.setView;
	return (
		<div id='scrollableDiv'>
			<DogsList setView={setView} />
		</div>
	);
};
