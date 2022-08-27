import React from 'react';
import styles from './About.module.css';
import RandomUnderline from '../../components/RandomUnderline/RandomUnderline';
import { motion } from 'framer-motion';

const upperLeftVariants = {
	initial: { opacity: 0, x: -30, y: -30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0.3, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const upperRightVariants = {
	initial: { opacity: 0, x: 30, y: 30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0.3, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const bottomRightVariants = {
	initial: { opacity: 0, x: 30, y: 30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const bottomLeftVariants = {
	initial: { opacity: 0, x: -30, y: 30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const About = () => {
	return (
		<div className={styles.about} id='about'>
			<div className={styles.aboutText}>
				<h1>About Us</h1>
				<motion.div className={styles.aboutTextContainer} initial='initial' whileInView='animate' viewport={{ once: true }}>
					<motion.p variants={upperLeftVariants}>
						<span className='name-highlight bg'>Neurodivergent</span> individuals are those with developmental, thinking, and learning
						differences compared to the “neurotypical” population. Neurodivergent individuals often face{' '}
						<RandomUnderline word='barriers and stigma' color='#5468C2' />, whether this is{' '}
						<RandomUnderline word='socially or academically' color='#FFB833' />. The Mindful Project is one of the few organizations that
						address these topics through workshops, events and fundraising.
					</motion.p>
					<motion.div className={styles.aboutImage} variants={upperRightVariants}>
						<img src='/images/about-graphic-yellow.svg' alt='' />
					</motion.div>
				</motion.div>
			</div>
			<motion.div className={styles.aboutContent} initial='initial' whileInView='animate' viewport={{ once: true }}>
				<motion.div className={styles.aboutSection} variants={bottomLeftVariants}>
					<div className={styles.aboutSectionHeader}>
						<h1>Our Mission</h1>
					</div>
					<p>
						This club reinforces the idea that differences are normal and that everyone should be offered the same opportunities in
						education and everyday life, thus advocating for inclusivity and accessibility at the University of Toronto. <br /> The club
						focuses on reducing the stigma of disabilities and disorders through workshops, various events, and fundraising to raise
						awareness and monetary donations to recognized organizations.
					</p>
				</motion.div>

				<motion.div className={styles.aboutSection} variants={bottomRightVariants}>
					<div className={styles.aboutSectionHeader}>
						<h1>Our Values</h1>
					</div>
					<p>
						This club hopes to provide various opportunities for fellow University of Toronto students to learn more about the challenges
						that the neurodivergent community faces and acquire valuable skills. The Mindful Project team seeks to provide growth
						opportunities both for its members.
					</p>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
