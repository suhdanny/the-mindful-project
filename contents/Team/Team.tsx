import React from 'react';
import styles from './Team.module.css';
import Member from '../../components/Member/Member';
import { members } from '../../data/members';

const Team = () => {
	const memberElements = members.map((member, index) => {
		return <Member key={index} name={member.name} position={member.position} />;
	});

	return (
		<div className={styles.team} id='team'>
			<div className={styles.teamHeading}>
				<h1>Meet the Team</h1>
			</div>
			<div className={styles.membersContainer}>{memberElements}</div>
		</div>
	);
};

export default Team;
