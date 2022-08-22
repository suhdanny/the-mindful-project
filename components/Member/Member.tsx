import React from 'react';
import styles from './Member.module.css';
import Fade from 'react-reveal/Fade';

type MemberProps = {
	imgURL?: string;
	name: string;
	position: string;
};

const Member = ({ imgURL, name, position }: MemberProps) => {
	return (
		<Fade>
			<div className={styles.member}>
				<div className={styles.memberImage}>
					<img src='/images/avatar.png' alt='blog image' />
				</div>
				<div className={styles.memberDetail}>
					<p>{name}</p>
					<p>{position}</p>
				</div>
			</div>
		</Fade>
	);
};

export default Member;
