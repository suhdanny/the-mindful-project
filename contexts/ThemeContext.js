import { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(curr => {
			return curr === 'light' ? 'dark' : 'light';
		});
	};

	console.log(theme);

	const value = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
