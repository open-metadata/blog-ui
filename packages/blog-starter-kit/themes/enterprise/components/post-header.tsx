import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { CoverImage } from './cover-image';
import { PostTitle } from './post-title';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
};

export const PostHeader = ({ title, coverImage }: Props) => {
	return (
		<>
			<PostTitle className="mb-5">{title}</PostTitle>
			{coverImage && (
				<div className="mx-auto w-full max-w-screen-lg px-5">
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
