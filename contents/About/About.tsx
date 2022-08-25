import React from 'react';
import styles from './About.module.css';
import { loremIpsum } from 'react-lorem-ipsum';
import Fade from 'react-reveal/Fade';

const About = () => {
	return (
		<div className={styles.about} id='about'>
			<div className={styles.aboutText}>
				<h1>About Us</h1>
				<div className={styles.aboutTextContainer}>
					<p>
						<span className='name-highlight'>The Mindful Project</span> is a recognized club at the University of Toronto which aims to
						increase awareness and acceptance of neurodivergence and educate others about the neurodiversity paradigm as a disability
						rights movement.
					</p>
					<div className={styles.aboutImage}>
						<img src='/images/about-graphic-yellow.svg' alt='' />
					</div>
				</div>
			</div>
			<div className={styles.aboutContent}>
				<Fade>
					<div className={styles.aboutSection}>
						<div className={styles.aboutSectionHeader}>
							<h1>Our Mission</h1>
						</div>
						<p>
							This club reinforces the idea that differences are normal and that everyone should be offered the same opportunities in
							education and everyday life, thus advocating for inclusivity and accessibility at the University of Toronto. The club
							focuses on reducing the stigma of disabilities and disorders through workshops, various events, and fundraising to raise
							awareness and monetary donations to recognized organizations.
						</p>
					</div>
				</Fade>
				<Fade>
					<div className={styles.aboutSection}>
						<div className={styles.aboutSectionHeader}>
							<h1>Our Values</h1>
						</div>
						<p>
							This club hopes to provide various opportunities for fellow University of Toronto students to learn more about the
							challenges that the neurodivergent community faces and acquire valuable skills. The Mindful Project team seeks to provide
							growth opportunities both for its members.
						</p>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default About;
