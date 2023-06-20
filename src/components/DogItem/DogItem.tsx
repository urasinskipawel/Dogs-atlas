import './DogItem.css';

interface Props {
	dog: string;
}

export const DogItem = (props: Props) => {
	return (
		<li className='DogItem'>
			<p>{props.dog}</p>
		</li>
	);
};
