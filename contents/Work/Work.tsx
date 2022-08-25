import React from 'react';
import styles from './Work.module.css';

const Work = () => {
	return (
		<div className={styles.work} id='work'>
			<h1 className={styles.workHeader}>What We Do</h1>
			<div className={styles.whatWeDoContainer}>
				<WhatWeDo
					imgURL='/images/workshop-blue.svg'
					title='Workshops'
					description={`Volunteers will be selected with care and trained extensively to provide the best support for neurodivergent children during regular workshops. Volunteers will gain important skills like communication, leadership, innovation and time management while creating valuable connections with those children and positively impacting their growth.`}
				/>
				<WhatWeDo
					imgURL='/images/events-red.svg'
					title='Events'
					description='Our events will gather professionals in the field in discussions that aim to educate the general public and raise awareness about the various challenges that the neurodivergent community face as well as how to be an ally for the community. Those events will also create space for discussions between students and professors regarding the topic addressed based on the event.'
				/>
				<WhatWeDo
					imgURL='/images/fundraising-yellow.svg'
					title='Fundraising'
					description='The Mindful Project will also focus on fundraising to raise awareness and provide the necessary support for neurodivergent individuals. By fundraising, the organization hopes to stimulate the conversation of inclusivity and accessibility for all students and staff at the University of Toronto.'
				/>
			</div>
		</div>
	);
};

const WhatWeDo = ({ imgURL, title, description }) => {
	return (
		<div className={styles.whatWeDo}>
			<div className={styles.whatWeDoImageContainer}>
				<img src={imgURL} />
			</div>
			<div className={styles.whatWeDoTextContainer}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Work;
