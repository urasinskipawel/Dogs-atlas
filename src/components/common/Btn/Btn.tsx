import './Btn.css';

interface Props {
	name: string;
	setView?: () => void;
	handleClick?: () => void;
}

export const Btn = (props: Props) => {
	const { setView, handleClick } = props;

	return (
		<>
			<button
				className='Btn'
				onClick={() => {
					setView && setView();
					handleClick && handleClick();
				}}>
				{props.name}
			</button>
		</>
	);
};
