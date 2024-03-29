import Link from 'next/link';
import type { PostMetadata } from '@lib/posts';
import formatDate from '@lib/formatDate';
import Categories from '@components/Categories';

type PostTitleListItemProps = {
  post: PostMetadata;
};

const PostTitleListItem = ({ post }: PostTitleListItemProps) => (
  <li className="flex flex-row flex-wrap">
    <Link className="text-contentLink" href={`/${post.slug}`}>
      {post.title}
    </Link>
    {post.categories.length > 0 && (
      <>
        <span>&nbsp;·&nbsp;</span>
        <Categories categories={post.categories} />
      </>
    )}
    <span>&nbsp;·&nbsp;</span>
    <span className="text-content">{`${formatDate(post.date)}`}</span>
  </li>
);

export default PostTitleListItem;
