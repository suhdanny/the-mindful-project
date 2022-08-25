import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { loremIpsum } from 'react-lorem-ipsum';

const Header = () => {
	return (
		<div className={styles.header} id='home'>
			<div className={styles.headerContent}>
				<h1>
					We are
					<br />
					<span className={styles.highlight}>The Mindful Project</span>
					<br />
					at University of Toronto
				</h1>
				<p>
					<span className='name-highlight'>The Mindful Project</span> is a recognized club at the University of Toronto which aims to
					increase awareness and acceptance of neurodivergence and educate others about the neurodiversity paradigm as a disability rights
					movement.
				</p>
			</div>
			<div className={styles.headerImageContainer}>
				<img src='/images/graphic-red-1.svg' />
			</div>
		</div>
	);
};

export default Header;
