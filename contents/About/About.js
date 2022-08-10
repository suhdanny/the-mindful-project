import React from 'react';
import styles from './About.module.css';
import { loremIpsum } from 'react-lorem-ipsum';

const About = () => {
	return (
		<div className={styles.about} id='about'>
			<div className={styles.aboutText}>
				<h1>About Us</h1>
				<p>
					{loremIpsum({
						avgWordsPerSentence: 10,
						avgSentencesPerParagraph: 4,
					})}
				</p>
			</div>
			<div className={styles.aboutContent}>
				<div className={styles.aboutSection}>
					<div className={styles.aboutSectionHeader}>
						<h1>Our Mission</h1>
					</div>
					<p>
						{loremIpsum({
							avgWordsPerSentence: 8,
							avgSentencesPerParagraph: 4,
						})}
					</p>
				</div>
				<div className={styles.aboutSection}>
					<div className={styles.aboutSectionHeader}>
						<h1>Our Values</h1>
					</div>
					<p>
						{loremIpsum({
							avgWordsPerSentence: 8,
							avgSentencesPerParagraph: 4,
						})}
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
