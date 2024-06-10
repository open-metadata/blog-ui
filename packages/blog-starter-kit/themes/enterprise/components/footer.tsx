import Image from 'next/image';
import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo || publication.preferences.logo;
	return (
		<footer className="bg-dark-background border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				<div className="grid w-full grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-4">
					<div className="text-footer col-span-1 flex flex-col gap-5 dark:text-neutral-300">
						{PUBLICATION_LOGO ? (
							<div className="-ml-4 flex w-full flex-row">
								<Link
									href={'/'}
									aria-label={`${publication.title} home page`}
									className="flex flex-row items-center gap-5"
								>
									<Image width={200} height={40} src={PUBLICATION_LOGO} alt={publication.title} />
								</Link>
							</div>
						) : (
							<p className="text-center text-xl font-semibold dark:text-slate-50 md:text-4xl">
								{publication.title}
							</p>
						)}
						<SocialLinks isSidebar iconClass="footer-social-icon" />
						<p>
							Copyright © {new Date().getFullYear()} <strong>Collate</strong>.
						</p>
						<p>All Rights Reserved</p>
					</div>
					<div className="col-span-full grid grid-cols-3 gap-5 md:col-span-4 lg:col-span-3">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="text-footer mb-2 font-semibold dark:text-neutral-200">Company</p>
							<ul className="text-footer flex flex-col gap-1 dark:text-neutral-300">
								<li>
									<a
										href="https://www.getcollate.io/pricing"
										className="hover:underline"
										target="_blank"
									>
										Pricing
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/careers"
										className="hover:underline"
										target="_blank"
									>
										Careers
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/about"
										className="hover:underline"
										target="_blank"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/contact"
										className="hover:underline"
										target="_blank"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<p className="text-footer mb-2 font-semibold dark:text-neutral-200">Support</p>
							<ul className="text-footer flex flex-col gap-1  dark:text-neutral-300">
								<li>
									<a
										href="https://www.getcollate.io/terms"
										className="hover:underline"
										target="_blank"
									>
										Terms of Service
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/privacypolicy"
										className="hover:underline"
										target="_blank"
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/legal"
										className="hover:underline"
										target="_blank"
									>
										Legal
									</a>
								</li>
								<li>
									<a
										href="https://www.getcollate.io/roadmap"
										className="hover:underline"
										target="_blank"
									>
										Roadmap
									</a>
								</li>
							</ul>
						</div>
						<div className="col-span-1">
							<Image
								className="cursor-pointer"
								src="https://www.getcollate.io/images/soc2.svg"
								alt="Soc2 Type 1"
								width={100}
								height={100}
							/>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
