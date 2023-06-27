import './DogItem.css';

interface Props {
	dog: string;
	setView?: () => void;
}

export const DogItem = (props: Props) => {
	const { setView } = props;

	return (
		<li
			className='DogItem'
			onClick={() => {
				setView && setView();
			}}>
			<p>{props.dog}</p>
		</li>
	);
};
