import { Btn } from '../common/Btn/Btn';
import { SetViewFunction } from '../../types/dogs-data';

import './ToggledNavbar.css';

interface Props {
	setView: SetViewFunction;
}

export const ToggledNavbar = (props: Props) => {
	const setView: SetViewFunction = props.setView;

	return (
		<div className='Toggled-navbar'>
			<Btn name={'Dogs List'} setView={() => setView(1)} />
			<Btn name={'Dogs Search'} setView={() => setView(2)} />
		</div>
	);
};
