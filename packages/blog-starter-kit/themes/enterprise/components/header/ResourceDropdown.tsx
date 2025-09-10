import { useEffect, useState } from 'react'
import ResourceDropdownItem from './ResourceDropdownItem'
import Image from 'next/image'

const ResourceDropdown = ({ handleResourceClick }: { handleResourceClick: () => void }) => {
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
        <div className="relative my-3 lg:my-0">
            <div className="flex justify-center items-center h-9 cursor-pointer text-sm  bg-white text-[#292E4E] rounded-full">
                <div className="dropdown">
                    <button
                        className="flex items-center rounded-full py-2 pl-2 dropdown-header"
                        onClick={() => isSmallScreen && handleResourceClick()}
                    >
                        <div
                            className={`text-[16px] lg:text-[14px] xl:text-[16px] underline-offset-4 -tracking-[0.16px] font-medium duration-200 cursor-pointer text-heading`}
                        >
                            Resources
                        </div>
                        <div className="inline-flex -rotate-90 h-full hover:bg-transparent justify-center w-8 items-center p-0 text-sm font-medium text-center text-heading lg:rotate-0 hover:bg-gray-100 focus:ring-gray-50">
                            <Image src="/assets/navbar/nav-right-icon.svg" alt="Arrow" className="w-4 h-4" width={16}  height={16}/>
                        </div>
                    </button>
                    {!isSmallScreen && <ResourceDropdownItem />}
                </div>
            </div>
        </div>
    )
}

export default ResourceDropdown
