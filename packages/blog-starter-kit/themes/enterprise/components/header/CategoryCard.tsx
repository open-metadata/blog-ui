import Image from 'next/image';
import React from 'react';
import ParamLink from '../ParamLink';
import { ProductLink } from './Header.interface';

const CategoryCard = ({ title, links }: { title: string; links: ProductLink[] | undefined }) => {
	return (
		<div>
			<div className="mb-6 flex items-center gap-2 uppercase tracking-[0.04em] text-[#5C6181]">
				{title}
			</div>
			<div className="flex flex-col gap-4 sm:gap-6">
				{links?.map(({ link, title, description, icon }) => (
					<ParamLink href={link} key={title} target="_blank">
						<div className="flex items-start gap-3 px-2 py-2 hover:rounded-md hover:bg-[#f8fbfc]">
							<div className="mt-1 flex-shrink-0">
								{typeof icon === 'string' ? (
									<Image src={icon} alt={title} className="h-9 w-9" width={36} height={36} />
								) : (
									React.createElement(icon)
								)}
							</div>
							<div className="min-w-0 flex-1">
								<div className="font-medium text-[#292E4E] min-[480px]:text-lg">{title}</div>
								<div className="break-words text-xs font-normal text-[#707590] min-[480px]:text-sm">
									{description}
								</div>
							</div>
						</div>
					</ParamLink>
				))}
			</div>
		</div>
	);
};

export default CategoryCard;
