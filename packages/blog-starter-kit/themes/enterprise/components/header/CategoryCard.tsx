import React, { FC, SVGProps } from 'react'
import ParamLink from '../ParamLink'

interface LinksType {
    link: string,
    title: string,
    description: string,
    icon: string | FC<SVGProps<SVGSVGElement>>
}

const CategoryCard = ({ title, links }: { title: string, links: LinksType[] }) => {
    return (
        <div>
            <div className="flex gap-2 items-center uppercase tracking-[0.04em] mb-6 text-[#5C6181]">
                {title}
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
                {links.map(({ link, title, description, icon }) => (
                    <ParamLink href={link} key={title}>
                        <div className="flex gap-3 items-start py-2 px-2 hover:bg-[#f8fbfc] hover:rounded-md">
                            <div className="flex-shrink-0 mt-1">
                                {typeof icon === 'string' ? (
                                    <img src={icon} alt={title} className="w-6 h-6" />
                                ) : (
                                    React.createElement(icon)
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[#292E4E] min-[480px]:text-lg font-medium">
                                    {title}
                                </div>
                                <div className="text-[#707590] font-normal text-xs min-[480px]:text-sm break-words">
                                    {description}
                                </div>
                            </div>
                        </div>
                    </ParamLink>
                ))}
            </div>
        </div>
    )
}

export default CategoryCard
