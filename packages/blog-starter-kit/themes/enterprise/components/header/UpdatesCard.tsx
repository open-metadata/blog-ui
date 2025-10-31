import ParamLink from '../ParamLink'
import { ProductUpdate } from './Header.interface'

const UpdatesCard = ({ updates }: { updates?: ProductUpdate[] }) => {
    return (
        <div>
            <div className="flex gap-2 items-center uppercase tracking-[0.04em] mb-6 text-[#5C6181]">
                Updates
            </div>
            <div className="flex flex-col gap-4">
                {updates?.map((update: ProductUpdate) => (
                    <ParamLink
                        href={update.link}
                        key={update.version}
                        target="_blank"
                    >
                        <div
                            className={`p-4 rounded-lg border ${
                                update.highlight
                                    ? 'border-[#CD3C4D] bg-[#FFF5F6]'
                                    : 'border-[#E8E8EA] hover:bg-[#f8fbfc]'
                            } transition-colors`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <span
                                    className={`text-xs font-semibold ${
                                        update.highlight
                                            ? 'text-[#CD3C4D]'
                                            : 'text-[#5C6181]'
                                    }`}
                                >
                                    {update.date}
                                </span>
                                {update.highlight && (
                                    <span className="text-xs bg-[#CD3C4D] text-white px-2 py-0.5 rounded">
                                        NEW
                                    </span>
                                )}
                            </div>
                            <div className="text-[#292E4E] font-semibold text-lg mb-2">
                                {update.title}
                            </div>
                            <div className="text-[#707590] text-sm leading-relaxed">
                                {update.description}
                            </div>
                            <div className="mt-3 text-[#CD3C4D] text-sm font-medium flex items-center gap-1">
                                <span>Read more</span>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </div>
                    </ParamLink>
                ))}
                <ParamLink
                    href="https://www.getcollate.io/product-updates"
                    className="text-[#CD3C4D] text-sm font-medium hover:underline mt-2 flex items-center gap-1"
                    target='_blank'
                >
                    <span>View all releases</span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </ParamLink>
            </div>
        </div>
    )
}

export default UpdatesCard