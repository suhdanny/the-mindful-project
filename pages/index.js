import React from 'react';
import Media from '../contents/Media/Media';
import Navbar from '../contents/Navbar/Navbar';
import Header from '../contents/Header/Header';
import Blog from '../contents/Blog/Blog';

const App = () => {
	return (
		<div className='App'>
			<Media />
			<div className='gradient__bg'>
				<Navbar />
				<Header />
				<Blog />
			</div>
		</div>
	);
};

export default App;
