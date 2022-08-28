import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Menu from '../../components/Menu/Menu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const leftVariants = {
	initial: { opacity: 0, x: -30 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.2, type: 'spring', stiffness: 200 } },
};

const topVariants = {
	initial: { opacity: 0, y: -30 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.2, type: 'spring', stiffness: 200 } },
};

const rightVariants = {
	initial: { opacity: 0, x: 30 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.2, type: 'spring', stiffness: 200 } },
};

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { theme, toggleTheme } = useTheme();
	const [isDarkMode, setDarkMode] = useState<boolean>(theme === 'light' ? false : true);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
		toggleTheme();
	};

	useEffect(() => {
		setDarkMode(theme === 'light' ? false : true);
	}, [theme]);

	return (
		<div className={styles.navbar}>
			<motion.div className={styles.navbarLinks} initial='initial' animate='animate'>
				<motion.div className={styles.navbarLogo} variants={leftVariants}>
					{theme === 'light' ? (
						<Image src='/images/logo.png' alt='logo' height='75' width='75' />
					) : (
						<Image src='/images/logo-dark.png' alt='logo' height='75' width='75' />
					)}
				</motion.div>
				<motion.div className={styles.navbarLinksContainer} variants={topVariants}>
					<Menu />
				</motion.div>
				<motion.div className={styles.accessibilityContainer} variants={rightVariants}>
					<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={25} moonColor='yellow' sunColor='orange' />
				</motion.div>
				<motion.div className={styles.navbarMenu} variants={rightVariants}>
					{toggleMenu ? (
						theme === 'light' ? (
							<RiCloseLine size={27} onClick={() => setToggleMenu(false)} color='black' />
						) : (
							<RiCloseLine size={27} onClick={() => setToggleMenu(false)} color='white' />
						)
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
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Navbar;
