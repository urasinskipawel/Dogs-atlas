import './DogImage.css';

interface Props {
	src: string | null;
	alt?: string;
}

export const DogImage = (props: Props) => {
	return (
		<div className='DogImage'>
			<img src={props.src as string} alt={props.alt && ''} />
		</div>
	);
};
