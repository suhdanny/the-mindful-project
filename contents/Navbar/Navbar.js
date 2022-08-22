import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Menu from '../../components/Menu/Menu';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLinks}>
				<div className={styles.navbarLogo}>
					<Image src='/images/logo.png' alt='logo' height='75' width='75' />
				</div>
				<div className={styles.navbarLinksContainer}>
					<Menu />
				</div>
				<div className={styles.navbarMenu}>
					{toggleMenu ? (
						<RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
					) : (
						<RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
					)}
					{toggleMenu && (
						<div className={`${styles.navbarMenuContainer} ${styles.scaleUpCenter}`}>
							<div className={styles.navbarMenuContainerLinks}>
								<Menu />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
