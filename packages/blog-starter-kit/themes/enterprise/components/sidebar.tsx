import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import ParamLink from './ParamLink';
import BookDemoDropDown from './book-demo-dropdown';
import { Button } from './button';
import CloseSVG from './icons/svgs/CloseSVG';
import { PublicationLogo } from './publication-logo';
import { SocialLinks } from './social-links';

type Props = {
	toggleSidebar: () => void;
	navbarItems: { label: string; url: string }[];
};

function PublicationSidebar(props: Props) {
	const { toggleSidebar, navbarItems } = props;
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<DialogPrimitive.Root open>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay
					className={`fixed inset-0 z-50 bg-slate-900 opacity-0 transition-opacity duration-300 ease-out ${
						isMounted && 'opacity-50'
					}`}
				/>
				<DialogPrimitive.Content
					onEscapeKeyDown={() => {
						toggleSidebar();
					}}
					onPointerDownOutside={() => {
						toggleSidebar();
					}}
					className={`${
						// When the sheet is mounted, we want to slide it in from the left.
						!isMounted ? '-translate-x-96' : 'translate-x-0'
					} fixed bottom-0 left-0 top-0 z-50 flex w-80 transform flex-col bg-white shadow-2xl duration-300 ease-out dark:border-neutral-800`}
				>
					<div className="blog-sidebar-header w-full shrink-0 py-6">
						<div className="flex items-center justify-between pl-8 pr-4">
							<div className="!text-xl">
								<PublicationLogo isSidebar />
							</div>

							<DialogPrimitive.Close asChild>
								<Button
									type="outline"
									label=""
									icon={<CloseSVG className="h-5 w-5 fill-current" />}
									className="rounded-xl !border-transparent !px-3 !py-2 hover:bg-neutral-800 dark:text-white"
									onClick={() => {
										toggleSidebar();
									}}
								/>
							</DialogPrimitive.Close>
						</div>
					</div>

					<div className="py-10 pl-8 pr-4">
						<section className="mb-10">
							<ul className="flex flex-col gap-2 text-slate-700 dark:text-white">
								{navbarItems.map((item) => (
									<li key={item.url}>
										<ParamLink
											href={item.url}
											name={item.label}
											className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 font-medium transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
										/>
									</li>
								))}
								<BookDemoDropDown isSidebar />
								<li className="py-3">
									<ParamLink
										target="_self"
										className="bg-secondary h-8 rounded-full px-4 py-2 text-[16px] text-base font-medium text-white duration-200 lg:px-0"
										aria-label="signup to getCollate"
										href="https://cloud.getcollate.io/signup"
									>
										<span className="font-medium lg:mx-6">Get Collate Free</span>
									</ParamLink>
								</li>
							</ul>
						</section>

						<SocialLinks isSidebar />
					</div>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}

export default PublicationSidebar;
