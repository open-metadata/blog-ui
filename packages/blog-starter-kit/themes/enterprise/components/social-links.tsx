import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from './icons';
import ParamLink from './ParamLink';

export const SocialLinks = ({
	isSidebar,
	iconClass,
}: {
	isSidebar?: boolean;
	iconClass?: string;
}) => {
	const { publication } = useAppContext();
	const hasSocialLinks = !Object.values(publication.links!).every((val) => val === '');

	return (
		<>
			<div
				className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : 'justify-end'
				}`}
			>
				{hasSocialLinks && (
					<>
						{publication.links?.twitter && (
							<ParamLink
								href={publication.links.twitter}
								target="_blank"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className={`flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 ${iconClass}`}
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</ParamLink>
						)}
						{publication.links?.github && (
							<ParamLink
								href={publication.links.github}
								target="_blank"
								aria-label="Find us on Github, external website, opens in new tab"
								className={`flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 ${iconClass}`}
							>
								<GithubSVG className="h-5 w-5 stroke-current" />
							</ParamLink>
						)}
						{publication.links?.linkedin && (
							<ParamLink
								href={publication.links.linkedin}
								target="_blank"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className={`flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 ${iconClass}`}
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</ParamLink>
						)}
						{publication.links?.hashnode && (
							<ParamLink
								href={publication.links.hashnode}
								target="_blank"
								aria-label="Find us on Hashnode, external website, opens in new tab"
								className={`flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 ${iconClass}`}
							>
								<HashnodeSVG className="h-5 w-5 stroke-current" />
							</ParamLink>
						)}
					</>
				)}

				<ParamLink
					href={`/rss.xml`}
					target="_blank"
					aria-label="Open blog XML Feed, opens in new tab"
					className={`flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 ${iconClass}`}
				>
					<RssSVG className="h-5 w-5 stroke-current" />
				</ParamLink>
			</div>
		</>
	);
};
