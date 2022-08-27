import React from 'react';
import styles from './Header.module.css';
import RandomUnderline from '../../components/RandomUnderline/RandomUnderline';
import { motion } from 'framer-motion';

const upperLeftVariants = {
	initial: { opacity: 0, x: -30, y: -30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0.3, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const bottomTopVariants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const bottomRightVariants = {
	initial: { opacity: 0, x: 30, y: 30 },
	animate: { opacity: 1, x: 0, y: 0, transition: { delay: 0.3, duration: 0.2, type: 'spring', stiffness: 200 } },
};

const Header = () => {
	return (
		<div className={styles.header} id='home'>
			<div className={styles.headerContent}>
				<motion.h1 variants={upperLeftVariants} initial='initial' animate='animate'>
					We are
					<br />
					<span className={styles.highlight}>The Mindful Project</span>
					<br />
					at University of Toronto
				</motion.h1>
				<motion.p variants={bottomTopVariants} initial='initial' animate='animate'>
					<span className='name-highlight ry'>The Mindful Project</span> is a recognized club at the University of Toronto which aims to
					increase awareness and acceptance of <RandomUnderline word='neurodiversity' color='#FF3360' /> and educate others about the
					neurodiversity paradigm as a disability rights movement.
				</motion.p>
			</div>
			<motion.div className={styles.headerImageContainer} variants={bottomRightVariants} initial='initial' animate='animate'>
				<img src='/images/graphic-red-1.svg' />
			</motion.div>
		</div>
	);
};

export default Header;

//<span className='stroke-container'><a ref={spanRef}>random line</a> {createSVG(spanWidth, 'black')}</span>
