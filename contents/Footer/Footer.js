import React from 'react';
import styles from './Footer.module.css';
import Menu from '../../components/Menu/Menu';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLinks}>
				<div className={styles.footerMenu}>
					<Menu />
				</div>
				<div className={styles.footerMenu}>
					<p>Resources</p>
					<p>
						<a href='https://celebratethespectrum.com/get-involved/' target='_blank' rel='noopener noreferrer'>
							celebratethespectrum.com
						</a>
					</p>
					<p>
						<a href='https://sop.utoronto.ca/' target='_blank' rel='noopener noreferrer'>
							sop.utoronto.ca
						</a>
					</p>
				</div>
				<div className={styles.footerMenu}>
					<p className={styles.footerMenuHeader}>Emails</p>
					<p>uoftthemindfulproject@gmail.com</p>
				</div>
			</div>
			<div className={styles.footerCopyRight}>© University of Toronto The Mindful Project 2022</div>
		</div>
	);
};

export default Footer;
