import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import ParamLink from './ParamLink';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-xl font-bold font-heading text-[#181D27] dark:text-neutral-50 lg:text-3xl">
					<ParamLink href={postURL} name={title} className='hover:underline' />
				</h1>
				<ParamLink href={postURL}>
					<p className="text-md text-[#414651] leading-[160%] dark:text-neutral-400">{excerpt}</p>
				</ParamLink>
				<div className="text-sm text-[#717680] dark:text-neutral-300">
					<ParamLink href={postURL}>
						<DateFormatter dateString={date} />
					</ParamLink>
				</div>
			</div>
		</section>
	);
};
