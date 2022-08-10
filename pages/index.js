import React from 'react';
import Media from '../contents/Media/Media';
import Navbar from '../contents/Navbar/Navbar';
import Header from '../contents/Header/Header';
import About from '../contents/About/About';
import Blog from '../contents/Blog/Blog';
import Team from '../contents/Team/Team';

const App = () => {
	return (
		<div className='App'>
			<Media />
			<div className='gradient__bg'>
				<Navbar />
				<Header />
				<About />
				<Blog />
				<Team />
			</div>
		</div>
	);
};

export default App;
