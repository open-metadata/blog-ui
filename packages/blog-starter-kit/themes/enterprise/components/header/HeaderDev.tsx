import Image from 'next/image';
import { useEffect, useState } from 'react';
import HamburgerSVG from '.././icons/svgs/HamburgerSVG';
import ParamLink from '../ParamLink';
import { PublicationLogo } from '../publication-logo';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import ResourceDropdown from './ResourceDropdown';
import ResourceDropdownItem from './ResourceDropdownItem';
import { NavData } from './Header.interface';
import { hrefLinks } from '../../utils/navbar';

function HeaderDev({ activeTab }: { readonly activeTab?: string }) {
	const [open, setOpen] = useState(false);
	const [isProductListOpen, setIsProductListOpen] = useState(false);
	const [isResourceListOpen, setIsResourceListOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [navData, setNavData] = useState<NavData | null>(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
	const [navbarVisible, setNavbarVisible] = useState(true);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const checkScreenSize = () => {
				setIsSmallScreen(window.innerWidth <= 1023);
			};

			checkScreenSize();
			window.addEventListener('resize', checkScreenSize);

			return () => window.removeEventListener('resize', checkScreenSize);
		}
	}, []);

	const toggleHamburger = () => setOpen(false);

	const handleProductClick = () => setIsProductListOpen(true);

	const handleResourceClick = () => setIsResourceListOpen(true);

	const handleCollateClick = () => {
		setIsProductListOpen(false);
		setOpen(true);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				setNavbarVisible(true);
			} else {
				setNavbarVisible(true);
			}
			setLastScrollTop(scrollTop);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop]);

    useEffect(() => {
		fetch('/navbar.json')
			.then((res) => res.json())
			.then((data) => setNavData(data))
			.catch(console.error);
	}, []);

    if (!navData) return null;

	return (
		<nav
			className={`border-grey-500 fixed	 top-0 z-50 w-full border-b bg-white bg-cover duration-300 max-sm:border-0 max-sm:drop-shadow-sm ${
				navbarVisible ? 'lg:top-0 lg:bg-white' : 'lg:top-[-80px]'
			}`}
		>
			<div className="mx-auto  flex h-16 flex-wrap items-center justify-between self-center pl-5 min-[1441px]:max-w-[1440px] 2xl:w-full">
				<PublicationLogo />
				<button
					className="cursor-pointer p-5 pr-6 lg:hidden"
					onClick={() => {
						setOpen((prev) => !prev);
						setIsProductListOpen(false);
						setIsResourceListOpen(false);
					}}
					aria-label="Toggle navigation menu"
					aria-expanded={open}
				>
					<HamburgerSVG className="h-5 w-5 stroke-current" />
				</button>

				<div
					className={`${
						open && !isProductListOpen ? 'block' : 'hidden'
					}  h-auto w-full gap-4 bg-white max-sm:w-full max-sm:drop-shadow-md md:w-full lg:flex lg:w-auto lg:items-center xl:gap-10`}
				>
					<Dropdown handleProductClick={handleProductClick} productData={navData?.productDropdown} />
					{navData.navLinks.map(({ label, link, site }) => {
                        const { finalLink, target } = hrefLinks(link, site)
                        
                        return (
						<div
							key={label}
							onClick={toggleHamburger}
							className={`border-t-1 border-body py-5 text-center last:border-b-2 max-sm:px-6 max-sm:py-4 md:px-6 lg:border-t-0 lg:p-0 lg:pr-2 lg:last:border-b-0 xl:pr-0`}
						>
							<ParamLink
								name={label}
								href={finalLink}
								aria-label={label}
								className={`cursor-pointer font-medium -tracking-[0.16px] duration-200 hover:text-[#007E99] lg:text-[14px] xl:text-[16px] ${
									activeTab?.includes(link) ? 'text-[#007E99]' : 'text-[#2B4E56]'
								}`}
								target={target}
							/>
						</div>
					)})}
					<ResourceDropdown handleResourceClick={handleResourceClick} resourceData={navData?.resourceDropdown} />
					<div className="relative">
						<div className="mx-auto flex h-9 max-w-[217px] cursor-pointer items-center justify-center  rounded-full bg-white text-sm text-[#292E4E]">
							<ParamLink
								name={navData.contact.title}
								href={`https://www.getcollate.io${navData.contact.link}`}
                                target='_blank'
								className="cursor-pointer text-[16px] font-medium -tracking-[0.16px] text-[#CD3C4D] duration-200 lg:text-[14px] xl:text-[16px]"
							/>
						</div>
					</div>
					{isSmallScreen ? (
						<div
							onClick={toggleHamburger}
							className="border-body flex content-center justify-center self-center  px-2  py-4  max-sm:px-6  md:px-4 lg:mx-5 lg:p-0"
						>
							<ParamLink href="https://www.getcollate.io/welcome" aria-label="signup to getCollate" target='_blank'>
								<div className="border-secondary text-secondary flex h-10 cursor-pointer content-center items-center gap-[6px] rounded-full border-2 px-10 py-2 text-[13px] text-base font-medium duration-200 max-sm:mb-4 max-sm:py-0 max-sm:text-center md:mb-4 md:py-0 md:text-center lg:mb-0 lg:px-0 lg:py-2">
									<Image
										src="/assets/navbar/speed.svg"
										alt="Speed"
										className="h-4 w-4"
										width={16}
										height={16}
									/>
									<span>Get Collate Free</span>
								</div>
							</ParamLink>
						</div>
					) : (
						<div className="border-body content-center border-t-2 pr-6 max-sm:border-t-0 md:border-t-0 lg:border-t-0">
							<ParamLink
								name="Get Collate Free"
								href="https://www.getcollate.io/welcome"
								aria-label="signup to getCollate"
                                target='_blank'
								className="bg-secondary h-8 cursor-pointer content-center rounded-full px-6 py-2 text-base font-medium text-white duration-200 max-sm:mb-4 max-sm:max-w-[100px] max-sm:py-0 max-sm:text-center md:mb-4 md:max-w-[140px] md:py-0 md:text-center lg:mb-0 lg:self-center lg:py-2 lg:text-[14px] xl:px-10 xl:text-[16px]"
							/>
						</div>
					)}
				</div>
				{isProductListOpen && <DropdownItem handleCollateClick={handleCollateClick} productData={navData?.productDropdown} />}
				{isResourceListOpen && <ResourceDropdownItem resourceData={navData?.resourceDropdown} />}
			</div>
		</nav>
	);
}

export default HeaderDev;
