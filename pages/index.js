import React from 'react';
import Media from '../contents/Media/Media';
import Navbar from '../contents/Navbar/Navbar';
import Header from '../contents/Header/Header';
import About from '../contents/About/About';
import Blog from '../contents/Blog/Blog';
import Team from '../contents/Team/Team';
import Contact from '../contents/Contact/Contact';

const App = () => {
	return (
		<div className='App'>
			<Media />
			<Navbar />
			<div className='gradient__bg'>
				<Header />
				<About />
				<Blog />
				<Team />
				<Contact />
			</div>
		</div>
	);
};

export default App;
