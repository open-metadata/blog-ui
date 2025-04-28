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
            // Google Tag Manager
            const gtmTagScript = document.createElement('script')
            gtmTagScript.innerHTML = `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-554C968W');
            `
            gtmTagScript.id = 'gtm-init'
            document.head.appendChild(gtmTagScript)
        } else {
            window.dataLayer = []
  
            const scriptTags = document.querySelectorAll(
                'script[src*="googletagmanager"], script#gtm-init'
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
