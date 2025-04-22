import { Analytics } from '@vercel/analytics/react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { GlobalFontVariables } from '../components/fonts';
import CookieModal from '../components/CookieModal';
import { useEffect, useState } from 'react';

declare global {
    interface Window {
        dataLayer: Record<string, any>[];
    }
}


export default function MyApp({ Component, pageProps }: AppProps) {
    const [storedCookie, setStoredCookie] = useState<string | null>(null);

	const handleButtonClick = (choice: string) => {
        localStorage.setItem('blogCookie', choice)
        setStoredCookie(choice)
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userCookie = window.localStorage.getItem('blogCookie')
            setStoredCookie(userCookie)
        }
    }, [])

    useEffect(() => {
        if (!storedCookie || storedCookie === 'Accept') {
            const gtmScript = document.createElement('script')
            gtmScript.src =
                'https://www.googletagmanager.com/gtag/js?id=G-8N4ZPTEDL2'
            gtmScript.async = true
            document.head.appendChild(gtmScript)

            const inlineScript = document.createElement('script')
            inlineScript.id = 'gtag-init'
            inlineScript.defer = true
            inlineScript.innerHTML = `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8N4ZPTEDL2');
          `
            document.head.appendChild(inlineScript)
        } else {
            window.dataLayer = []

            const scriptTags = document.querySelectorAll(
                'script[src*="googletagmanager"], script#gtag-init'
            )
            scriptTags.forEach((tag) => tag.remove())
        }
    }, [storedCookie])

	return (
		<>
			<GlobalFontVariables />
			{!storedCookie && (
                <CookieModal handleButtonClick={handleButtonClick} />
            )}
			<Component {...pageProps} />;
			<Analytics />
		</>
	);
}
