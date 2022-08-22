import React from 'react';
import styles from './Media.module.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaLink } from 'react-icons/fa';

const Media = () => {
	return (
		<div className={styles.mediaContainer}>
			<a href='https://www.instagram.com/uoftthemindfulproject/' target='_blank' rel='noopener noreferrer'>
				<FaInstagram size={30} style={{ cursor: 'pointer' }} />
			</a>
			<a href='https://www.facebook.com/uoftthemindfulproject' target='_blank' rel='noopener noreferrer'>
				<FaFacebookF size={30} style={{ cursor: 'pointer' }} />
			</a>
			<a href='https://www.linkedin.com/company/u-of-t-the-mindful-project/' target='_blank' rel='noopener noreferrer'>
				<FaLinkedinIn size={30} style={{ cursor: 'pointer' }} />
			</a>
		</div>
	);
};

export default Media;
