import React, { useState, useContext, createContext, useEffect } from 'react';

interface ThemeContextInterface {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface | null>(null);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<string>();

	const getLocalStorageItem = key => {
		return typeof window !== undefined ? window.localStorage.getItem(key) : null;
	};

	useEffect(() => {
		setTheme(getLocalStorageItem('theme') || 'light');
	}, []);

	const toggleTheme = () => {
		setTheme(curr => {
			const newTheme = curr === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	const value: ThemeContextInterface = {
		theme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
