import { DogsSearch } from '../DogsSearch/DogsSearch';

import './DogsSearchBox.css';

interface Props {
	clickedValue: string;
}

export const DogsSearchBox = (props: Props) => {
	const { clickedValue } = props;

	return (
		<div className='DogsSearchBox'>
			<DogsSearch clickedValue={clickedValue} />
		</div>
	);
};
