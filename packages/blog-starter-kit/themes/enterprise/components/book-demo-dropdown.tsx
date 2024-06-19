import {
	Content as DropdownContent,
	Item as DropdownItem,
	Portal as DropdownPortal,
	Root as DropdownRoot,
	Trigger as DropdownTrigger,
} from '@radix-ui/react-dropdown-menu';

export const BOOK_A_DEMO_LINK = {
	label: 'Book a Demo',
	url: 'https://www.getcollate.io/book-demo',
	id: 'book-a-demo',
};

export const CONTACT_US_LINK = {
	label: 'Contact Us',
	url: 'https://www.getcollate.io/contact',
	id: 'contact-us',
};

const BookDemoDropDown = ({ isSidebar }: { isSidebar?: boolean }) => {
	return (
		<DropdownRoot modal={false}>
			<li
				className={`flex cursor-pointer items-center gap-2 ${isSidebar ? 'mb-3 ml-2' : ''}`}
				key={BOOK_A_DEMO_LINK.url}
			>
				<a
					id={BOOK_A_DEMO_LINK.id}
					href={BOOK_A_DEMO_LINK.url}
					target="_self"
					rel="noopener noreferrer"
					className={`block max-w-[200px] truncate text-ellipsis whitespace-nowrap text-[16px] font-medium text-[#CD3C4D] underline underline-offset-4 hover:text-[#CD3C4D]`}
				>
					{BOOK_A_DEMO_LINK.label}
				</a>
				<DropdownTrigger aria-label="Share this article" className="cursor-pointer outline-none">
					<span>
						<svg height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L6 6L11 1" stroke="#CD3C4D" />
						</svg>
					</span>
				</DropdownTrigger>
			</li>
			<DropdownPortal>
				<DropdownContent
					side="bottom"
					align="start"
					alignOffset={-110}
					sideOffset={16}
					className="z-50 w-40 border border-slate-200 bg-white px-2 py-2"
				>
					<DropdownItem className="outline-none" asChild>
						<a
							id={CONTACT_US_LINK.id}
							href={CONTACT_US_LINK.url}
							target="_self"
							rel="noopener noreferrer"
							className={`hover:text-link block max-w-[200px] truncate text-ellipsis whitespace-nowrap text-[16px] font-medium`}
						>
							{CONTACT_US_LINK.label}
						</a>
					</DropdownItem>
				</DropdownContent>
			</DropdownPortal>
		</DropdownRoot>
	);
};

export default BookDemoDropDown;
