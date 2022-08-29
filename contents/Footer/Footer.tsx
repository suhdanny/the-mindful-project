import React from 'react';
import styles from './Footer.module.css';
import Menu from '../../components/Menu/Menu';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Footer = () => {
	const showMediaIcons = useMediaQuery('(max-width: 700px)');

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
				{showMediaIcons && (
					<div className={styles.footerMenu}>
						<p className={styles.footerMenuHeader}>Social Media</p>
						<div className={styles.mediaContainer}>
							<a href='https://www.instagram.com/uoftthemindfulproject/' target='_blank' rel='noopener noreferrer'>
								<FaInstagram size={20} style={{ cursor: 'pointer' }} />
							</a>
							<a href='https://www.facebook.com/uoftthemindfulproject' target='_blank' rel='noopener noreferrer'>
								<FaFacebookF size={20} style={{ cursor: 'pointer' }} />
							</a>
							<a href='https://www.linkedin.com/company/u-of-t-the-mindful-project/' target='_blank' rel='noopener noreferrer'>
								<FaLinkedinIn size={20} style={{ cursor: 'pointer' }} />
							</a>
						</div>
					</div>
				)}
			</div>
			<div className={styles.footerCopyRight}>© University of Toronto The Mindful Project 2022</div>
		</div>
	);
};

export default Footer;
