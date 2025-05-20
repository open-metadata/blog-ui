import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import ParamLink from './ParamLink';

type Author = Pick<User, 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

export const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<div className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<CoverImage
					slug={slug}
					title={title}
					src={resizeImage(coverImage, { w: 400, h: 210, c: 'thumb' }, DEFAULT_COVER)}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-lg font-bold font-heading text-[#181D27] dark:text-neutral-50">
					<ParamLink link={postURL} name={title} className='hover:underline' />
				</h1>
				<ParamLink link={postURL}>
					<p className="text-md text-[#414651] dark:text-neutral-400">
						{excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
					</p>
				</ParamLink>
				<div className="text-sm text-[#717680] dark:text-neutral-300">
					<ParamLink link={postURL}>
						<DateFormatter dateString={date} />
					</ParamLink>
				</div>
			</div>
		</div>
	);
};
