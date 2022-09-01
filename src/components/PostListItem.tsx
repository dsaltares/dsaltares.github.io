import Link from 'next/link';
import type { PostMetadata } from '@lib/posts';
import formatDate from '@lib/formatDate';
import { categoryToHref } from '@lib/href';

type PostListItemProps = {
  post: PostMetadata;
};

const PostListItem = ({ post }: PostListItemProps) => (
  <article>
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
    <div className="flex flex-row gap-1 mb-3">
      {post.categories.map((category) => (
        <Link key={category} href={categoryToHref(category)}>
          <a className="px-2 py-1 bg-slate-900 text-white rounded font-bold text-sm">
            {category}
          </a>
        </Link>
      ))}
    </div>
    {post.description && (
      <>
        <p className="text-content mb-3">{post.description}</p>
        <Link href={post.slug}>
          <a className="text-contentLink">Read on →</a>
        </Link>
      </>
    )}
  </article>
);

export default PostListItem;
