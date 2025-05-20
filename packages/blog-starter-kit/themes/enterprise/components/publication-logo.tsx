import { PublicationFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import ParamLink from './ParamLink';

const getPublicationLogo = (publication: PublicationFragment, isSidebar?: boolean) => {
	if (isSidebar) {
		return publication.preferences.logo; // Always display light mode logo in sidebar
	}
	return publication.preferences.logo || publication.preferences.darkMode?.logo;
};

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = getPublicationLogo(publication, isSidebar);

	return (
		<h1 className="relative w-full">
			<ParamLink
				link="https://www.getcollate.io/"
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center justify-center gap-3"
			>
				{PUBLICATION_LOGO ? (
					<>
						<img
							className="block h-[32px] w-auto shrink-0 cursor-pointer"
							alt={publication.title}
							src="https://www.getcollate.io/images/logo.svg"
						/>
					</>
				) : (
					<span
						className={`block text-2xl font-semibold ${
							isSidebar ? 'text-black dark:text-white' : 'text-white md:text-4xl'
						}`}
					>
						{publication.title}
					</span>
				)}
			</ParamLink>
		</h1>
	);
};
