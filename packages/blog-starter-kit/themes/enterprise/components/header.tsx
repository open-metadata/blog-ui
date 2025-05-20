import { useEffect, useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import BookDemoDropDown from './book-demo-dropdown';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import ParamLink from './ParamLink';

export const NAV_LINKS = [
	{
		label: 'Product',
		url: 'https://www.getcollate.io/product',
		id: 'product',
	},
	{
		label: 'Pricing',
		url: 'https://www.getcollate.io/pricing',
		id: 'pricing',
	},
	{
		label: 'Blog',
		url: 'https://blog.getcollate.io/',
		id: 'blog',
	},
	{
		label: 'Docs',
		url: 'https://docs.getcollate.io/',
		id: 'docs',
		isExternalLink: true,
	},
	{
		label: 'Contact Us',
		url: 'https://www.getcollate.io/contact',
		id: 'contact-us',
	},
];

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const [scrolledNav, setScrolledNav] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 100) {
			setScrolledNav(true);
		} else {
			setScrolledNav(false);
		}
	};

	useEffect(function mount() {
		window.addEventListener('scroll', changeBackground);

		return function unMount() {
			window.removeEventListener('scroll', changeBackground);
		};
	}, []);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const navList = (
		<ul className="flex flex-row items-center gap-10 text-[#162044]">
			{NAV_LINKS.map((item) => (
				<li key={item.url}>
					<ParamLink
						link={item.url}
						target={item?.isExternalLink ? '_blank' : '_self'}
						className={`hover:text-link block max-w-[200px] truncate text-ellipsis whitespace-nowrap text-[16px] font-medium ${
							item.url === 'https://blog.getcollate.io/' ? 'text-link' : ''
						}`}
					>
						{item.label}
					</ParamLink>
				</li>
			))}
			<BookDemoDropDown />
			<li>
				<ParamLink
					link="https://cloud.getcollate.io/signup"
					target="_self"
					className="bg-secondary h-8 rounded-full px-4 py-2 text-[16px] text-base font-medium text-white duration-200"
					aria-label="signup to getCollate"
				>
					<span className="font-medium lg:mx-6">Get Collate Free</span>
				</ParamLink>
			</li>
		</ul>
	);

	return (
		<header
			className={`dark:bg-neutral-900" border-b-[rgb(229, 231, 235)] fixed top-0 z-50 h-16 w-full border-b py-4 duration-300 ${
				scrolledNav ? 'bg-white shadow-md' : 'bg-white'
			}`}
		>
			<div className="collate-container mx-auto grid grid-cols-4 gap-5 px-7">
				<div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-1">
					<div className="lg:block">
						<PublicationLogo />
					</div>
				</div>
				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					<nav className="hidden lg:block">{navList}</nav>
					<div className="justify-end lg:hidden">
						<Button
							type="outline"
							label=""
							icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
							className="hover:bg-background rounded-xl border-transparent !px-3 !py-2 text-black"
							onClick={toggleSidebar}
						/>

						{isSidebarVisible && (
							<PublicationSidebar navbarItems={NAV_LINKS} toggleSidebar={toggleSidebar} />
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
