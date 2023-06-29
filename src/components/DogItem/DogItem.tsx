import './DogItem.css';

interface Props {
	dog: string;
	setView?: () => void;
	handleClick: (dog: string) => void;
}

export const DogItem = (props: Props) => {
	const { setView, handleClick } = props;

	return (
		<li
			className='DogItem'
			onClick={() => {
				setView && setView();
				handleClick(props.dog);
			}}>
			<p>{props.dog}</p>
		</li>
	);
};
