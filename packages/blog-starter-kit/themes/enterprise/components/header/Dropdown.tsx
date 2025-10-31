import Image from 'next/image';
import { useEffect, useState } from 'react';
import DropdownItem from './DropdownItem';
import { ProductDropdown } from './Header.interface';

interface DropdownProps {
	handleProductClick: () => void;
	productData: ProductDropdown;
}

const Dropdown = ({ handleProductClick, productData }: DropdownProps) => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

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

	return (
		<div className="relative mb-2 lg:mb-0">
			<div className="flex h-9 cursor-pointer items-center justify-center rounded-full  bg-white text-sm text-[#292E4E]">
				<div className="dropdown">
					<button
						className="dropdown-header flex items-center rounded-full py-2 pl-4"
						onClick={() => isSmallScreen && handleProductClick()}
					>
						<div
							className={`text-heading cursor-pointer text-[16px] font-medium -tracking-[0.16px] underline-offset-4 duration-200 lg:text-[14px] xl:text-[16px]`}
						>
							{productData?.title}
						</div>
						<div className="text-heading inline-flex h-full w-8 -rotate-90 items-center justify-center p-0 text-center text-sm font-medium hover:bg-gray-100 hover:bg-transparent focus:ring-gray-50 lg:rotate-0">
							<Image
								src="/assets/navbar/nav-right-icon.svg"
								alt="Arrow"
								className="h-4 w-4"
								width={16}
								height={16}
							/>
						</div>
					</button>
					{!isSmallScreen && <DropdownItem productData={productData} />}
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
