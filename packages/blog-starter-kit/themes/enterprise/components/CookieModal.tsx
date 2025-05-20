import { useEffect } from 'react';
import ParamLink from './ParamLink';

const CookieModal = ({ handleButtonClick }: { handleButtonClick: (choice: string) => void }) => {
	const handleModalClose = (choice: string) => {
		const modalElement = document.querySelector('.cookie-modal');
		if (modalElement) {
			modalElement.classList.remove('visible');
			setTimeout(() => handleButtonClick(choice), 1200);
		}
	};

	useEffect(() => {
		const modalElement = document.querySelector('.cookie-modal');
		const timer = setTimeout(() => {
			if (modalElement) {
				modalElement.classList.add('visible');
			}
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="shadow-shadow cookie-card cookie-modal fixed bottom-0 z-[30] bg-[#F8FBFC] p-6 sm:m-5 sm:max-w-xl lg:max-w-4xl">
			<p className="font-light text-[#475569]">
				We use cookies to improve site navigation, analyze site usage, and enhance your user
				experience. Click &quot;Accept&quot; to enable cookies or &quot;Reject&quot; to reject
				cookies. To learn more, read our{' '}
				<ParamLink
					link="https://www.getcollate.io/privacypolicy"
					name="Privacy Policy"
					className="text-primary cursor-pointer underline"
				/>
				.
			</p>
			<div className="mt-8 flex justify-end gap-3">
				<button
					className="rounded-3xl bg-[#CD3C4D] px-8 py-2 text-sm text-white"
					onClick={() => handleModalClose('Accept')}
				>
					Accept
				</button>
				<button
					className="rounded-3xl border border-[#CD3C4D] bg-white px-8 py-2 text-sm text-[#CD3C4D]"
					onClick={() => handleModalClose('Decline')}
				>
					Reject
				</button>
			</div>
		</div>
	);
};

export default CookieModal;
