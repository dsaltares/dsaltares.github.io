import Link from 'next/link';
import formatDate from '@lib/formatDate';
import { categoryToHref } from '@lib/href';
import type { PostMetadata } from '@lib/posts';
import Categories from './Categories';

type PostHeaderProps = {
  post: PostMetadata;
};

const PostHeader = ({ post }: PostHeaderProps) => (
  <div>
    <Link href={post.slug}>
      <a>
        <h1 className="font-bold text-4xl mb-2 text-primary">{post.title}</h1>
      </a>
    </Link>
    <p className="flex text-contentLight mb-1">
      {`${formatDate(post.date)} · ${post.readingTime}`}
      <span>&nbsp;·&nbsp;</span>
      <Link href={`${post.slug}#disqus_thread`}>
        <a className="text-contentLink">{'Comments'}</a>
      </Link>
    </p>
    <div className="mb-3">
      <Categories categories={post.categories} />
    </div>
  </div>
);

export default PostHeader;
