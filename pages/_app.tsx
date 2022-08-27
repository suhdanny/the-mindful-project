import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from '../contexts/ThemeContext';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
