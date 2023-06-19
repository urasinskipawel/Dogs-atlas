import { Header } from '../Header/Header';
import { Content } from '../Content/Content';
import { ToggledNavbar } from '../ToggledNavbar/ToggledNavbar';
import './App.css';

export const App = () => {
	return (
		<div className='App-container'>
			<Header />
			<Content />
			<ToggledNavbar />
		</div>
	);
};
