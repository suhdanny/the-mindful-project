import React, { useState } from 'react';
import Media from '../contents/Media/Media';
import Navbar from '../contents/Navbar/Navbar';
import Header from '../contents/Header/Header';
import About from '../contents/About/About';
// import Blog from '../contents/Blog/Blog';
import Team from '../contents/Team/Team';
import Contact from '../contents/Contact/Contact';
import Footer from '../contents/Footer/Footer';
import { useTheme } from '../contexts/ThemeContext';
import Work from '../contents/Work/Work';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className='App' id={theme}>
			<Media />
			<Navbar />
			<div className='gradient__bg' style={{ width: '100%' }}>
				<Header />
				<About />
				{/* <Blog /> */}
				<Work />
				<Team />
				{/* <Contact /> */}
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default App;
