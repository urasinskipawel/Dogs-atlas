import { DogItem } from '../DogItem/DogItem';
import './DogsList.css';

export const DogsList = () => {
	return (
		<ul className='Dogs-list'>
			<li>Husky</li>
			<li>Kundel</li>
			<li>Ratler</li>
			<li>Owczarek niemiecki</li>
			<li>Spaniel</li>
			{/* <DogItem /> */}
		</ul>
	);
};
