import Image from 'next/image'
import ParamLink from '../ParamLink'
import { NAV_ARTICLES } from '../../constants/Navbar.constants'

const ResourceDropdownItem = () => {
    return (
        <div className="overflow-y-auto max-h-[calc(100vh-100px)] touch-pan-y absolute z-10 dropdown-menu w-[95%] top-[52px] rounded-b-sm lg:rounded-b-2xl lg:w-[920px] lg:top-auto lg:-left-[600px] xl:-left-[700px] lg:hidden">
            <div className="h-[14px] w-full bg-transparent"></div>
            <div className="bg-white font-medium border border-[#e8e8ea] border-t-0 rounded-b-sm lg:rounded-b-2xl">
                <div className="grid md:grid-cols-7 md:gap-10">
                    <div className="p-5 md:p-8 box-border w-full md:col-span-2">
                        <div className="text-[#5C6181] font-medium uppercase tracking-[0.04em] text-lg">
                            Resources
                        </div>
                        <div className="flex items-center gap-3 mt-8 mb-6">
                            <Image
                                src="/assets/navbar/case-study-icon.svg"
                                alt="case-study"
                                width={40}
                                height={40}
                            />
                            <ParamLink
                                name="Case Studies"
                                href="https://www.getcollate.io/case-studies"
                                className="text-[#292E4E] font-medium md:text-[15px] hover:underline"
                            />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/assets/navbar/learning-center-icon.svg"
                                alt="learning-center"
                                width={40}
                                height={40}
                            />
                            <ParamLink
                                name="Learning Center"
                                href="https://www.getcollate.io/learning-center"
                                className="text-[#292E4E] font-medium md:text-[15px] hover:underline"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/navbar/events-icon.svg"
                                alt="events"
                                width={40}
                                height={40}
                            />
                            <ParamLink
                                name="Events"
                                href="https://www.getcollate.io/events"
                                className="text-[#292E4E] font-medium md:text-[15px] hover:underline"
                            />
                        </div>
                    </div>
                    <div className="bg-[#E8F2F4] p-5 md:p-8 w-full box-border md:col-span-5">
                        <div className="text-[#5C6181] font-medium uppercase tracking-[0.04em] text-lg">
                            Articles
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                            {NAV_ARTICLES.map((item) => (
                                <ParamLink
                                    href={`https://www.getcollate.io/learning-center/${item.slug}`}
                                    key={item.id}
                                >
                                    <div className="text-[#292E4E] text-[16px]">
                                        {item.title}
                                    </div>
                                    <div className="text-[#707590] text-[14px] mt-1">
                                        {item.description}
                                    </div>
                                </ParamLink>
                            ))}
                            <div>
                                <ParamLink
                                    href="https://www.getcollate.io/learning-center"
                                    className="text-[#CD3C4D] text-[18px] font-medium hover:underline"
                                >
                                    <span>View all Articles {'>'} </span>
                                </ParamLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceDropdownItem
