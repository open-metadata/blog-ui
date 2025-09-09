import { useEffect, useState } from 'react'
import DropdownItem from './DropdownItem'

const Dropdown = ({ handleProductClick }: { handleProductClick: () => void }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkScreenSize = () => {
                setIsSmallScreen(window.innerWidth <= 1023)
            }
    
            checkScreenSize()
            window.addEventListener('resize', checkScreenSize)
    
            return () => window.removeEventListener('resize', checkScreenSize)
        }
    }, [])

    return (
        <div className="relative mb-2 lg:mb-0">
            <div className="flex justify-center items-center h-9 cursor-pointer text-sm  bg-white text-[#292E4E] rounded-full">
                <div className="dropdown">
                    <button
                        className="flex items-center rounded-full py-2 pl-4 dropdown-header"
                        onClick={() => isSmallScreen && handleProductClick()}
                    >
                        <div
                            className={`text-[16px] lg:text-[14px] xl:text-[16px] underline-offset-4 -tracking-[0.16px] font-medium duration-200 cursor-pointer text-heading`}
                        >
                            Products
                        </div>
                        <div className="inline-flex -rotate-90 h-full hover:bg-transparent justify-center w-8 items-center p-0 text-sm font-medium text-center text-heading lg:rotate-0 hover:bg-gray-100 focus:ring-gray-50">
                            <img src="/assets/navbar/nav-right-icon.svg" alt="Arrow" className="w-4 h-4" />
                        </div>
                    </button>
                    {!isSmallScreen && <DropdownItem />}
                </div>
            </div>
        </div>
    )
}

export default Dropdown
