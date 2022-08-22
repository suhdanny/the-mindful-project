import React from 'react';
import Media from '../contents/Media/Media';
import Navbar from '../contents/Navbar/Navbar';
import Header from '../contents/Header/Header';
import About from '../contents/About/About';
import Blog from '../contents/Blog/Blog';
import Team from '../contents/Team/Team';
import Contact from '../contents/Contact/Contact';
import Footer from '../contents/Footer/Footer';
import { useTheme } from '../contexts/ThemeContext';

const App = () => {
	const { theme } = useTheme();

	return (
		<div className='App' id={theme}>
			<Media />
			<Navbar />
			<div className='gradient__bg'>
				<Header />
				<About />
				<Blog />
				<Team />
				{/* <Contact /> */}
			</div>
			<Footer />
		</div>
	);
};

export default App;
