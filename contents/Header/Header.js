import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { loremIpsum } from 'react-lorem-ipsum';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from 'react-scroll';

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
				{/* <div className={styles.arrowDownIcon}>
					<Link to='about' smooth={true} duration={500} spy={true} offset={-100}>
						<BsChevronCompactDown size={30} style={{ color: '#FF3360' }} />
					</Link>
				</div> */}
			</div>
			<div className={styles.headerImageContainer}>{/* <img src='/images/neuro.jpeg' /> */}</div>
		</div>
	);
};

export default Header;
