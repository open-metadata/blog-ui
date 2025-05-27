import Image from 'next/image';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import ParamLink from './ParamLink';

export const Footer = () => {
	const { publication } = useAppContext();
	return (
		<footer className="bg-dark-background border-t py-20 dark:border-neutral-800 ">
			<Container className="px-5">
				<div className="grid w-full grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-4">
					<div className="text-footer col-span-1 flex flex-col gap-5 dark:text-neutral-300">
						<div className="flex w-full flex-row">
							<ParamLink
								href={'/'}
								aria-label={`${publication.title} home page`}
								className="flex flex-row items-center gap-5"
							>
								<Image
									className="h-[50px] w-[200px] md:h-[28px] lg:h-[50px] lg:w-[267px]"
									width={200}
									height={50}
									src="/assets/footer/collate-logo-footer.svg"
									alt={publication.title}
								/>
							</ParamLink>
						</div>
						<p className="text-[#E0E0E0]">
							Copyright © {new Date().getFullYear()} <strong>Collate</strong>.
						</p>
						<p className="text-[#E0E0E0]">All Rights Reserved</p>
						<ul className="flex">
							<li className="group mr-3 flex cursor-pointer items-center justify-center duration-300">
								<ParamLink
									href="https://twitter.com/collatedata"
									target="_blank"
									className="fill-para duration-300 group-hover:fill-white"
									aria-label="Twitter link of getCollate"
								>
									<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#twitter-x_svg__a)">
											<path
												d="M32 25.503C32 29.076 29.076 32 25.503 32H6.497C2.924 32 0 29.076 0 25.503V6.497C0 2.924 2.924 0 6.497 0h19.006C29.076 0 32 2.924 32 6.497v19.006Z"
												fill="#41464A"
											></path>
											<path
												d="m18.395 14.404 7.697-9.593h-2.23l-6.582 8.204-6.583-8.204h-7.35l10.258 12.784-7.698 9.595h2.23l6.582-8.206 6.584 8.206h7.35L18.395 14.404ZM6.972 6.55h2.89l15.166 18.9h-2.89L6.971 6.55Z"
												fill="#F0F0F1"
											></path>
										</g>
										<defs>
											<clipPath id="twitter-x_svg__a">
												<path fill="#fff" d="M0 0h32v32H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</ParamLink>
							</li>
							<li className="  group mr-3 flex cursor-pointer items-center justify-center duration-300">
								<ParamLink
									href="https://www.linkedin.com/company/collateinc"
									target="_blank"
									className="fill-para duration-300 group-hover:fill-white"
									aria-label="LinkedIn link of getCollate"
								>
									<svg width="33" height="33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#linkedin_svg__a)">
											<path
												d="M28.136.415H4.864A4.364 4.364 0 0 0 .5 4.779V28.05a4.364 4.364 0 0 0 4.364 4.364h23.272a4.364 4.364 0 0 0 4.364-4.364V4.78A4.364 4.364 0 0 0 28.136.415Z"
												fill="#41464A"
											></path>
											<path
												d="M12.027 9.142a2.727 2.727 0 1 1-5.454 0 2.727 2.727 0 0 1 5.454 0ZM11.41 13.688v12.05a.677.677 0 0 1-.675.677H7.86a.675.675 0 0 1-.676-.676v-12.05a.677.677 0 0 1 .676-.677h2.875a.677.677 0 0 1 .674.676ZM26.434 19.96v5.833a.62.62 0 0 1-.622.622h-3.09a.62.62 0 0 1-.622-.622v-5.652c0-.844.247-3.695-2.206-3.695-1.9 0-2.287 1.951-2.363 2.827v6.52a.622.622 0 0 1-.613.622h-2.986a.62.62 0 0 1-.62-.622V13.635a.62.62 0 0 1 .62-.622h2.986a.622.622 0 0 1 .622.622v1.051c.705-1.058 1.75-1.874 3.982-1.874 4.941 0 4.912 4.614 4.912 7.149Z"
												fill="#fff"
											></path>
										</g>
										<defs>
											<clipPath id="linkedin_svg__a">
												<path fill="#fff" transform="translate(.5 .415)" d="M0 0h32v32H0z"></path>
											</clipPath>
										</defs>
									</svg>
								</ParamLink>
							</li>
						</ul>
					</div>
					<div className="col-span-full grid grid-cols-3 justify-items-center gap-5 md:col-span-4 lg:col-span-3">
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<h3 className="w-min text-xl font-semibold text-white">Company</h3>
							<ul className="text-footer flex flex-col gap-4 pt-5 dark:text-neutral-300">
								<li>
									<ParamLink
										href="https://www.getcollate.io/product"
										className="footer-link hover:underline"
										name="Product"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/pricing"
										className="footer-link hover:underline"
										name="Pricing"
									/>
								</li>
								<li>
									<ParamLink
										href="https://blog.getcollate.io"
										className="footer-link hover:underline"
										name="Blog"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/careers"
										className="footer-link hover:underline"
										name="Careers"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/about"
										className="footer-link hover:underline"
										name="About"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/contact"
										className="footer-link hover:underline "
										name="Contact Us"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/book-demo"
										className="footer-link hover:underline"
										name="Book a Demo"
									/>
								</li>
							</ul>
						</div>
						<div className="col-span-full md:col-span-2 lg:col-span-1">
							<h3 className="w-min text-xl font-semibold text-white">Support</h3>
							<ul className="text-footer mt-5 flex flex-col gap-5 dark:text-neutral-300">
								<li>
									<ParamLink
										href="https://www.getcollate.io/terms"
										className="footer-link hover:underline"
										target="_blank"
										name="Terms of Service"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/privacypolicy"
										className="footer-link hover:underline"
										target="_blank"
										name="Privacy Policy"
									/>
								</li>
								<li>
									<ParamLink
										href="https://trustcenter.getcollate.io"
										className="footer-link hover:underline "
										target="_blank"
										name="Trust Center"
									/>
								</li>
								<li>
									<ParamLink
										href="https://www.getcollate.io/roadmap"
										className="footer-link hover:underline"
										target="_blank"
										name="Roadmap"
									/>
								</li>
								<li>
									<ParamLink
										href="https://docs.getcollate.io"
										className="footer-link hover:underline"
										target="_blank"
										name="Documentation"
									/>
								</li>
							</ul>
						</div>
						<div className="col-span-1 flex flex-col gap-5">
							<Image
								className="cursor-pointer"
								src="/assets/footer/soc2.svg"
								alt="Soc2 Type 1"
								width={100}
								height={100}
							/>
							<Image
								className="cursor-pointer"
								src="/assets/footer/gdpr.svg"
								alt="GDPR"
								width={100}
								height={100}
							/>
							<Image
								className="cursor-pointer"
								src="/assets/footer/ccpa.svg"
								alt="CCPA"
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
