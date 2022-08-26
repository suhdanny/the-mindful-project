import React from 'react';
import styles from './About.module.css';
import Fade from 'react-reveal/Fade';
import UnderlineSVG from '../../components/UnderlineSVG/UnderlineSVG';

const About = () => {
	return (
		<div className={styles.about} id='about'>
			<div className={styles.aboutText}>
				<h1>About Us</h1>
				<div className={styles.aboutTextContainer}>
					<p>
						<span className='name-highlight bg'>Neurodivergent</span> individuals are those with developmental, thinking, and learning
						differences compared to the “neurotypical” population. Neurodivergent individuals often face{' '}
						<UnderlineSVG word='arriers and stigma' color='#5468C2' />, whether this is{' '}
						<UnderlineSVG word='socially or academically' color='#FFB833' />. The Mindful Project is one of the few organizations that
						address these topics through workshops, events and fundraising.
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
							education and everyday life, thus advocating for inclusivity and accessibility at the University of Toronto. <br /> The
							club focuses on reducing the stigma of disabilities and disorders through workshops, various events, and fundraising to
							raise awareness and monetary donations to recognized organizations.
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
