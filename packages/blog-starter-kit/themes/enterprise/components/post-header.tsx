import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { ReadTimeInMinutes } from './post-read-time-in-minutes';
import { PostTitle } from './post-title';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
};

export const PostHeader = ({ title, coverImage, author, date, readTimeInMinutes }: Props) => {
	return (
		<>
			<PostTitle className="mb-8 lg:mb-12">{title}</PostTitle>
			<div className="mb-8 flex w-full flex-row flex-wrap items-center justify-center gap-2 px-2 text-[#717680] dark:text-neutral-300 md:px-0 lg:hidden">
				<Avatar
					username={author.username}
					name={author.name}
					size={8}
					picture={author.profilePicture}
				/>
				<span className="block font-bold text-[#717680]">&middot;</span>
				<DateFormatter dateString={date} />
				{readTimeInMinutes && <span className="block font-bold text-[#717680]">&middot;</span>}
				<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
			</div>
			{coverImage && (
				<div className="mx-auto mb-12 w-full max-w-screen-lg px-5">
					<CoverImage
						title={title}
						src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' })}
						priority={true}
					/>
				</div>
			)}
		</>
	);
};
