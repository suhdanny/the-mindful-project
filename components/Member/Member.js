import React from 'react';
import styles from './Member.module.css';

const Member = ({ name, position }) => {
	return (
		<div className={styles.member}>
			<div className={styles.memberImage}>
				<img src='/images/avatar.png' alt='blog image' />
			</div>
			<div className={styles.memberDetail}>
				<p>{name}</p>
				<p>{position}</p>
			</div>
		</div>
	);
};

export default Member;
