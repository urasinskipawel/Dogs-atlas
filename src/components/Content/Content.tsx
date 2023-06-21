import { DogImage } from '../DogImage/DogImage';
import { DogsList } from '../DogsList/DogsList';
import { DogsSearch } from '../DogsSearch/DogsSearch';
import './Content.css';

export const Content = () => {
	return (
		<div className='Content'>
			{/* <DogsList /> */}
			<DogsSearch />
			<DogImage />
		</div>
	);
};
