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
		<li className={`${isSidebar ? 'mb-3 ml-2' : ''}`}>
			<a
				id={BOOK_A_DEMO_LINK.id}
				href={BOOK_A_DEMO_LINK.url}
				target="_self"
				rel="noopener noreferrer"
				className={`block max-w-[200px] truncate text-ellipsis whitespace-nowrap text-[16px] font-medium text-[#CD3C4D] underline underline-offset-4 hover:text-[#CD3C4D]`}
			>
				{BOOK_A_DEMO_LINK.label}
			</a>
		</li>
	);
};

export default BookDemoDropDown;
