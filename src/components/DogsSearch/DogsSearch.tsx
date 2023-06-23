import { Btn } from '../common/Btn/Btn';
import './DogsSearch.css';

export const DogsSearch = () => {
	return (
		<div className='DogsSearch'>
			<form>
				<input type='text' />
			</form>
			<Btn name={'Search'} />
		</div>
	);
};
