import { DogImage } from '../DogImage/DogImage';
import { DogsSearch } from '../DogsSearch/DogsSearch';

import './DogsSearchBox.css';

export const DogsSearchBox = () => {
	return (
		<div className='DogsSearchBox'>
			<DogsSearch />
		</div>
	);
};
