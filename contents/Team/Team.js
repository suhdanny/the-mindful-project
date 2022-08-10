import React from 'react';
import styles from './Team.module.css';
import Member from '../../components/Member/Member';

const Team = () => {
	return (
		<div className={styles.team} id='team'>
			<div className={styles.teamHeading}>
				<h1>Meet the Team</h1>
			</div>
			<div className={styles.membersContainer}>
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
				<Member name='Name' position='Position' />
			</div>
		</div>
	);
};

export default Team;
