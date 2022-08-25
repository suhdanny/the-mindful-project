import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Menu from '../../components/Menu/Menu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const [isDarkMode, setDarkMode] = useState<boolean>(theme === 'light' ? false : true);

	console.log(isDarkMode);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		toggleTheme();
	};

	useEffect(() => {
		setDarkMode(theme === 'light' ? false : true);
	}, [theme]);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLinks}>
				<div className={styles.navbarLogo}>
					{theme === 'light' ? (
						<Image src='/images/logo.png' alt='logo' height='75' width='75' />
					) : (
						<Image src='/images/logo-dark.png' alt='logo' height='75' width='75' />
					)}
				</div>
				<div className={styles.navbarLinksContainer}>
					<Menu />
				</div>
				<div className={styles.accessibilityContainer}>
					<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={25} moonColor='yellow' sunColor='orange' />
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
