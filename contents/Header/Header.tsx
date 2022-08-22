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
					at U of T
				</h1>
				<p>
					{loremIpsum({
						avgWordsPerSentence: 8,
						avgSentencesPerParagraph: 4,
					})}
				</p>
			</div>
			<div className={styles.headerImageContainer}>{/* <img src='/images/neuro.jpeg' /> */}</div>
		</div>
	);
};

export default Header;
