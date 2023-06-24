import './Btn.css';

export const Btn = props => {
	const setView = props.setView;
	const handleClick = props.handleClick;
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
