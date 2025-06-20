import { Integrations } from './integrations';
import { Meta } from './meta';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<div className="bg-background min-h-screen">
				<main>{children}</main>
			</div>
			<Integrations />
		</>
	);
};
