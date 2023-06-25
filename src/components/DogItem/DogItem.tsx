import { DogImage } from '../DogImage/DogImage';
import './DogItem.css';

interface Props {
	dog: string;
}

export const DogItem = props => {
	const setView = props.setView;

	return (
		<li
			className='DogItem'
			onClick={() => {
				setView && setView();
			}}>
			<p>
				{props.dog}
			</p>
		</li>
	);
};
