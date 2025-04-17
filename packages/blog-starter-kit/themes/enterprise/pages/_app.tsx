import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { GlobalFontVariables } from '../components/fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalFontVariables />
			<Component {...pageProps} />;
			<Analytics />
		</>
	);
}
