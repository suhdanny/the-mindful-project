import React from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLinks}>
				<div className={styles.navbarLogo}>
					<Image src='/images/logo.png' alt='logo' height='75' width='75' />
				</div>
				<div className={styles.navbarLinksContainer}>
					<p>
						<a href='#'>about us</a>
					</p>
					<p>
						<a href='#'>what we do</a>
					</p>
					<p>
						<a href='#'>meet the team</a>
					</p>
					<p>
						<a href='#'>articles</a>
					</p>
					<p>
						<a href='#'>contact us</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
