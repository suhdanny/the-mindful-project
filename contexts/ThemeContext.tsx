import React, { useState, useContext, createContext } from 'react';

interface ThemeContextInterface {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(curr => {
			return curr === 'light' ? 'dark' : 'light';
		});
	};

	const value: ThemeContextInterface = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
