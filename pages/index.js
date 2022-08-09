import React from 'react';
import Media from '../components/Media/Media';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';

const App = () => {
	return (
		<div className='App'>
			<Media />
			<div className='gradient__bg'>
				<Navbar />
				<Header />
			</div>
		</div>
	);
};

export default App;
