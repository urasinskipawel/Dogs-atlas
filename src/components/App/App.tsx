import { useState } from 'react';
import { DogsListBox } from '../DogsListBox/DogsListBox';
import { DogsSearchBox } from '../DogsSearchBox/DogsSearchBox';
import { Header } from '../Header/Header';
import { ToggledNavbar } from '../ToggledNavbar/ToggledNavbar';

import './App.css';

export const App = () => {
	const [active, setActive] = useState<number>(1);

	const SetView = active => {
		setActive(active);
	};

	const ActiveView = () => {
		switch (active) {
			case 1:
				return <DogsListBox />;
			case 2:
				return <DogsSearchBox />;
			default:
				return null;
		}
	};

	return (
		<div className='App-container'>
			<Header />
			{ActiveView()}
			<ToggledNavbar setView={SetView} />
		</div>
	);
};
