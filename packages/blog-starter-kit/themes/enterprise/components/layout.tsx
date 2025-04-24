import Script from 'next/script';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="bg-background min-h-screen">
				<main>{children}</main>
			</div>
			<Script
        		dangerouslySetInnerHTML={{
          			__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            		})(window,document,'script','dataLayer','GTM-554C968W');`,
        		}}
				id='tag-manager'
      		/>
			<Integrations />
		</>
	);
};
