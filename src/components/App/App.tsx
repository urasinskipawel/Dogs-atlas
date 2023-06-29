import { useState } from 'react';
import { DogsListBox } from '../DogsListBox/DogsListBox';
import { DogsSearchBox } from '../DogsSearchBox/DogsSearchBox';
import { Header } from '../Header/Header';
import { ToggledNavbar } from '../ToggledNavbar/ToggledNavbar';

import './App.css';

export const App = () => {
	const [active, setActive] = useState<number>(1);
	const [clickedValue, setClickedValue] = useState<string>('');

	const SetView = (active: number): void => {
		setActive(active);
	};

	const handleDogClickedValue = (dogName: string): void => {
		setClickedValue(dogName);
	};

	const ActiveView = (): JSX.Element | null => {
		switch (active) {
			case 1:
				return <DogsListBox setView={SetView} handleDogClickedValue={handleDogClickedValue} />;
			case 2:
				return <DogsSearchBox clickedValue={clickedValue} />;
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
