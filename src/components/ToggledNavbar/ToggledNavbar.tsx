import { Btn } from '../common/Btn/Btn';
import './ToggledNavbar.css';

export const ToggledNavbar = props => {
	const setView = props.setView;

	return (
		<div className='Toggled-navbar'>
			<Btn name={'Dogs List'} setView={() => setView(1)} />
			<Btn name={'Dogs Search'} setView={() => setView(2)} />
		</div>
	);
};
