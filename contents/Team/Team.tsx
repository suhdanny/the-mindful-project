import React, { useState, useEffect } from 'react';
import styles from './Team.module.css';
import Member from '../../components/Member/Member';
import { members } from '../../data/members';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Team = () => {
	const isMobile = useMediaQuery('(max-width: 650px)');
	const [memberElements, setMemberElements] = useState([]);
	const [loadMoreMembers, setLoadMoreMembers] = useState(false);

	useEffect(() => {
		const loadMemberElements = () => {
			const newMemberElements = members.map((member, index) => {
				if (!isMobile || loadMoreMembers) {
					return <Member key={index} name={member.name} position={member.position} imgURL={member.imgURL}/>;
				} else {
					return index < 3 ? <Member key={index} name={member.name} position={member.position} imgURL={member.imgURL}/> : null;
				}
			});

			return newMemberElements;
		};

		setMemberElements(loadMemberElements());
	}, [isMobile, loadMoreMembers]);

	return (
		<div className={styles.team} id='team'>
			<div className={styles.teamHeading}>
				<h1>Meet the Team</h1>
			</div>
			<div className={styles.membersContainer}>{memberElements}</div>
			<div className={styles.buttonContainer}>
				{!loadMoreMembers ? (
					<button onClick={() => setLoadMoreMembers(true)}>Load More</button>
				) : (
					<button onClick={() => setLoadMoreMembers(false)}>Collapse</button>
				)}
			</div>
		</div>
	);
};

export default Team;
