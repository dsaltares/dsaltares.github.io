import Link from 'next/link';
import type { PostMetadata } from '@lib/posts';
import formatDate from '@lib/formatDate';

type PostListItemProps = {
  post: PostMetadata;
};

const PostListItem = ({ post }: PostListItemProps) => (
  <article>
    <Link href={post.href}>
      <a>
        <h1 className="font-bold text-4xl mb-2">{post.title}</h1>
      </a>
    </Link>
    <span className="text-contentLight">
      {`${formatDate(post.date)} · ${post.readingTime}`} ·{' '}
      <Link href={`${post.href}#disqus_thread`}>
        <a className="text-contentLink">Comments</a>
      </Link>
    </span>
    <p>{JSON.stringify(post.categories)}</p>
    <p>{post.description}</p>
    <p>Read on →</p>
  </article>
);

export default PostListItem;
