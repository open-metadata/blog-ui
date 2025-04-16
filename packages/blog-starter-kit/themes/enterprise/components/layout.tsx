import { Inter } from 'next/font/google';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

const inter = Inter({ subsets: ['latin'], fallback: ['sans-serif'] });

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="bg-background min-h-screen">
				<main className={inter.className}>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
