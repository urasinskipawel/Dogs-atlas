import './DogImage.css';

export const DogImage = props => {
	return (
		<div className='DogImage'>
			<img src={props.src} alt={props.alt && ''} />
		</div>
	);
};
