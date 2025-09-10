import React, { useEffect, useState } from 'react'
import ParamLink from '../ParamLink'
import { PublicationLogo } from '../publication-logo'
import HamburgerSVG from '.././icons/svgs/HamburgerSVG';
import Dropdown from './Dropdown'
import ResourceDropdown from './ResourceDropdown'
import DropdownItem from './DropdownItem'
import ResourceDropdownItem from './ResourceDropdownItem'
import { NAV_LINKS } from '../../constants/Navbar.constants'
import Image from 'next/image';

function HeaderDev({ activeTab }: { readonly activeTab?: string }) {
    const [open, setOpen] = useState(false)
    const [isProductListOpen, setIsProductListOpen] = useState(false)
    const [isResourceListOpen, setIsResourceListOpen] = useState(false)
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

    const toggleHamburger = () => setOpen(false)
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [navbarVisible, setNavbarVisible] = useState(true)

    const handleProductClick = () => setIsProductListOpen(true)

    const handleResourceClick = () => setIsResourceListOpen(true)

    const handleCollateClick = () => {
        setIsProductListOpen(false)
        setOpen(true)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop
            if (scrollTop > lastScrollTop) {
                setNavbarVisible(true)
            } else {
                setNavbarVisible(true)
            }
            setLastScrollTop(scrollTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollTop])

    return (
                <nav
                    className={`fixed max-sm:drop-shadow-sm	 bg-cover top-0 z-50 w-full duration-300 max-sm:border-0 border-b border-grey-500 bg-white ${
                        navbarVisible
                            ? 'lg:top-0 lg:bg-white'
                            : 'lg:top-[-80px]'
                    }`}
                >
                    <div className="min-[1441px]:max-w-[1440px]  mx-auto h-16 flex justify-between flex-wrap items-center self-center 2xl:w-full pl-5">
                        <PublicationLogo />
                        <button
                            className="p-5 cursor-pointer lg:hidden pr-6"
                            onClick={() => {
                                setOpen((prev) => !prev)
                                setIsProductListOpen(false)
                                setIsResourceListOpen(false)
                            }}
                            aria-label="Toggle navigation menu"
                            aria-expanded={open}
                        >
                            <HamburgerSVG className="h-5 w-5 stroke-current" />
                        </button>

                        <div
                            className={`${
                                open && !isProductListOpen ? 'block' : 'hidden'
                            }  h-auto w-full max-sm:drop-shadow-md lg:w-auto lg:flex lg:items-center bg-white max-sm:w-full md:w-full gap-4 xl:gap-10`}
                        >
                            <Dropdown handleProductClick={handleProductClick} />
                            {NAV_LINKS.map(
                                ({ label, link, isExternalLink }) => (
                                    <div
                                        key={label}
                                        onClick={toggleHamburger}
                                        className={`py-5 lg:p-0 text-center border-t-1 last:border-b-2 border-body lg:border-t-0 lg:last:border-b-0 max-sm:px-6 max-sm:py-4 lg:pr-2 xl:pr-0 md:px-6`}
                                    >
                                        <ParamLink
                                            name={label}
                                            href={link}
                                            aria-label={label}
                                            className={`lg:text-[14px] xl:text-[16px] -tracking-[0.16px] font-medium duration-200 hover:text-[#007E99] cursor-pointer ${
                                                activeTab?.includes(link)
                                                    ? 'text-[#007E99]'
                                                    : 'text-[#2B4E56]'
                                            }`}
                                            target={
                                                isExternalLink
                                                    ? '_blank'
                                                    : '_self'
                                            }
                                        />
                                    </div>
                                )
                            )}
                            <ResourceDropdown
                                handleResourceClick={handleResourceClick}
                            />
                            <div className="relative">
                                <div className="flex justify-center items-center mx-auto h-9 cursor-pointer text-sm  bg-white text-[#292E4E] max-w-[217px] rounded-full">
                                    <ParamLink
                                        name="Contact Us"
                                        href='https://www.getcollate.io/contact-sales'
                                        className="text-[16px] lg:text-[14px] xl:text-[16px] text-[#CD3C4D] -tracking-[0.16px] font-medium duration-200 cursor-pointer"
                                    />
                                </div>
                            </div>
                            {isSmallScreen ? (
                                <div
                                    onClick={toggleHamburger}
                                    className="self-center py-4 px-2 lg:mx-5 lg:p-0  border-body  content-center  max-sm:px-6  md:px-4 flex justify-center"
                                >
                                    <ParamLink
                                        href="https://www.getcollate.io/welcome"
                                        aria-label="signup to getCollate"
                                    >
                                        <div className="px-10 text-[13px] cursor-pointer items-center gap-[6px] h-10 py-2 flex lg:px-0 content-center border-2 border-secondary rounded-full text-secondary text-base font-medium duration-200 max-sm:text-center max-sm:mb-4 max-sm:py-0 md:py-0 md:mb-4 lg:py-2 lg:mb-0 md:text-center">
                                            <Image src="/assets/navbar/speed.svg" alt="Speed" className="w-4 h-4" width={16} height={16} />
                                            <span>Get Collate Free</span>
                                        </div>
                                    </ParamLink>
                                </div>
                            ) : (
                                <div className="border-t-2 border-body lg:border-t-0 content-center max-sm:border-t-0 md:border-t-0 pr-6">
                                    <ParamLink
                                        name="Get Collate Free"
                                        href="https://www.getcollate.io/welcome"
                                        aria-label="signup to getCollate"
                                        className="px-6 xl:px-10 lg:text-[14px] xl:text-[16px] cursor-pointer h-8 py-2 content-center bg-secondary rounded-full text-white text-base font-medium duration-200 max-sm:max-w-[100px] max-sm:text-center max-sm:mb-4 max-sm:py-0 md:py-0 md:mb-4 lg:py-2 lg:mb-0 md:text-center md:max-w-[140px] lg:self-center"
                                    />
                                </div>
                            )}
                        </div>
                        {isProductListOpen && (
                            <DropdownItem
                                handleCollateClick={handleCollateClick}
                            />
                        )}
                        {isResourceListOpen && <ResourceDropdownItem />}
                    </div>
                </nav>
    )
}

export default HeaderDev
