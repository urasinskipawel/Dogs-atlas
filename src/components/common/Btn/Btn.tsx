import './Btn.css';

export const Btn = props => {
	const setView = props.setView;
	return (
		<>
			<button className='Btn' onClick={setView}>
				{props.name}
			</button>
		</>
	);
};
