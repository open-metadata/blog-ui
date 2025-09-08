import { FEATURE_LINKS, PRODUCT_LINKS, PRODUCT_UPDATES } from '../../constants/Navbar.constants'
import CategoryCard from './CategoryCard'
import UpdatesCard from './UpdatesCard'

const DropdownItem = ({ handleCollateClick }: { handleCollateClick?: () => void }) => {
    return (
        <div className="overflow-y-auto max-h-[calc(100vh-100px)] touch-pan-y absolute z-10 dropdown-menu w-[95%] top-[50px] rounded-b-sm lg:rounded-b-2xl lg:w-[920px] lg:top-auto lg:-left-64 xl:-left-40 lg:hidden">
            <div className="h-[14px] w-full bg-transparent"></div>
            <div className="bg-white font-medium p-5 min-[480px]:p-8 border border-[#e8e8ea] border-t-0 rounded-b-sm lg:rounded-b-2xl">
                <div className="flex gap-2 items-center tracking-[0.04em] text-lg font-bold mb-6 text-[#1D3439] lg:hidden">
                    <button onClick={handleCollateClick}>Collate</button>
                    <div className="inline-flex -rotate-90 h-full hover:bg-transparent justify-center w-8 items-center p-0 text-sm text-center text-[#1D3439] lg:text-[#396973] lg:rotate-0">
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 1L5 5L1 1"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div>Products</div>
                </div>
                <div className="hidden lg:flex gap-6 mb-8">
                    <div className="lg:border-r lg:border-[#E8E8EA] lg:flex lg:gap-6">
                        <div className="flex-1 max-w-[280px]">
                            <CategoryCard
                                title="Platform"
                                links={PRODUCT_LINKS}
                            />
                        </div>
                        <div className="flex-1 max-w-[280px]">
                            <CategoryCard
                                title="Features"
                                links={FEATURE_LINKS}
                            />
                        </div>
                    </div>
                    <div className="flex-1 max-w-[320px]">
                        <UpdatesCard updates={PRODUCT_UPDATES} />
                    </div>
                </div>
                <div className="flex gap-10 md:gap-16 flex-col md:flex-row lg:hidden mb-8">
                    <CategoryCard title="Platform" links={PRODUCT_LINKS} />
                    <CategoryCard title="Features" links={FEATURE_LINKS} />
                </div>
                <div className="lg:hidden border-t border-[#E8E8EA] pt-6 -mx-5 px-5 min-[480px]:-mx-8 min-[480px]:px-8">
                    <UpdatesCard updates={PRODUCT_UPDATES} />
                </div>
            </div>
        </div>
    )
}

export default DropdownItem
