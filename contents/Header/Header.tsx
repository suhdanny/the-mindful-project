import React from 'react';
import styles from './Header.module.css';
import UnderlineSVG from '../../components/UnderlineSVG/UnderlineSVG';

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
					<span className='name-highlight ry'>The Mindful Project</span> is a recognized club at the University of Toronto which aims to
					increase awareness and acceptance of <UnderlineSVG word='neurodiversity' color='#FF3360' /> and educate others about the
					neurodiversity paradigm as a disability rights movement.
				</p>
			</div>
			<div className={styles.headerImageContainer}>
				<img src='/images/graphic-red-1.svg' />
			</div>
		</div>
	);
};

export default Header;

//<span className='stroke-container'><a ref={spanRef}>random line</a> {createSVG(spanWidth, 'black')}</span>
