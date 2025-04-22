import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
	className?: string;
};

export const PostTitle = ({ children, className }: Props) => {
	return (
		<div
			className={`prose-sm font-bold font-heading md:prose-lg prose-h1:leading-[37.5px] md:prose-h1:leading-[60px] dark:prose-invert prose-h1:text-center mx-auto max-w-screen-lg px-5 ${className}`}
		>
			<h1 className="">{children}</h1>
		</div>
	);
};
