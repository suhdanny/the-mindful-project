import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Menu from '../../components/Menu/Menu';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

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
			<div className={styles.navbarLinks}>
				<motion.div
					className={styles.navbarLogo}
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}>
					{theme === 'light' ? (
						<Image src='/images/logo.png' alt='logo' height='75' width='75' />
					) : (
						<Image src='/images/logo-dark.png' alt='logo' height='75' width='75' />
					)}
				</motion.div>
				<motion.div
					className={styles.navbarLinksContainer}
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1, duration: 0.3 }}>
					<Menu />
				</motion.div>
				<motion.div
					className={styles.accessibilityContainer}
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.2, duration: 0.3 }}>
					<DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={25} moonColor='yellow' sunColor='orange' />
				</motion.div>
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
