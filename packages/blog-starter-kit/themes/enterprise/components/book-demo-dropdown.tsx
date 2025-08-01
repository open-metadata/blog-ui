import ParamLink from "./ParamLink";

export const BOOK_A_DEMO_LINK = {
	label: 'Contact Us',
	url: 'https://www.getcollate.io/contact-sales',
	id: 'contact-us',
};

export const CONTACT_US_LINK = {
	label: 'Contact Us',
	url: 'https://www.getcollate.io/contact-sales',
	id: 'contact-us',
};

const BookDemoDropDown = ({ isSidebar }: { isSidebar?: boolean }) => {
	return (
		<li className={`${isSidebar ? 'mb-3 ml-2' : ''}`}>
			<ParamLink
				href={BOOK_A_DEMO_LINK.url}
				target="_self"
				name={BOOK_A_DEMO_LINK.label}
				className={`block max-w-[200px] truncate text-ellipsis whitespace-nowrap text-[16px] font-medium text-[#CD3C4D] underline underline-offset-4 hover:text-[#CD3C4D]`}
			/>
		</li>
	);
};

export default BookDemoDropDown;
