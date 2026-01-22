import Image from 'next/image';
import ParamLink from '../ParamLink';
import { ResourceDropdownType } from './Header.interface';

const ResourceDropdownItem = ({ resourceData }: { resourceData?: ResourceDropdownType }) => {
	return (
		<div className="dropdown-menu absolute top-[52px] z-10 max-h-[calc(100vh-100px)] w-[92%] sm:w-[95%] touch-pan-y overflow-y-auto rounded-b-sm lg:-left-[600px] lg:top-auto lg:hidden lg:w-[920px] lg:rounded-b-2xl xl:-left-[700px]">
			<div className="h-[14px] w-full bg-transparent"></div>
			<div className="rounded-b-sm border border-t-0 border-[#e8e8ea] bg-white font-medium lg:rounded-b-2xl">
				<div className="grid md:grid-cols-7 md:gap-10">
					<div className="box-border w-full p-5 md:col-span-2 md:p-8">
						<div className="text-lg font-medium uppercase tracking-[0.04em] text-[#5C6181]">
							{resourceData?.title}
						</div>
						{resourceData?.resourceItems?.map((item) => (
							<div className="mb-6 mt-8 flex items-center gap-3" key={item.title}>
								<Image src={item.icon} alt={item.title} width={40} height={40} />
								<ParamLink
									name={item.title}
									href={`https://www.getcollate.io${item.link}`}
									target="_blank"
									className="font-medium text-[#292E4E] hover:underline md:text-[15px]"
								/>
							</div>
						))}
					</div>
					<div className="box-border w-full bg-[#E8F2F4] p-5 md:col-span-5 md:p-8">
						<div className="text-lg font-medium uppercase tracking-[0.04em] text-[#5C6181]">
							Articles
						</div>
						<div className="mt-6 grid gap-6 sm:grid-cols-2">
							{resourceData?.resourceArticles.map((item) => (
								<ParamLink
									href={`https://www.getcollate.io/learning-center/${item.slug}`}
									key={item.id}
                                    target='_blank'
								>
									<div className="text-[16px] text-[#292E4E]">{item.title}</div>
									<div className="mt-1 text-[14px] text-[#707590]">{item.description}</div>
								</ParamLink>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResourceDropdownItem;
