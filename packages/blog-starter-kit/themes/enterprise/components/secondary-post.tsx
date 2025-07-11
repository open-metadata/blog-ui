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

export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid items-start gap-5 md:grid-cols-2">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h2 className="text-lg font-bold font-heading text-[#181D27] dark:text-neutral-50">
					<ParamLink href={postURL} name={title} className='hover:underline' />
				</h2>
				<ParamLink href={postURL}>
					<p className="text-md text-[#414651] dark:text-neutral-400">
						{excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt}
					</p>
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
