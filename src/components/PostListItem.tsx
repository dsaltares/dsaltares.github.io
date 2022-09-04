import Link from 'next/link';
import type { PostMetadata } from '@lib/posts';
import PostHeader from './PostHeader';

type PostListItemProps = {
  post: PostMetadata;
};

const PostListItem = ({ post }: PostListItemProps) => (
  <article>
    <PostHeader post={post} />
    {post.description && (
      <>
        <p className="text-content mb-3">{post.description}</p>
        <Link href={`/${post.slug}`}>
          <a className="text-contentLink">Read on →</a>
        </Link>
      </>
    )}
  </article>
);

export default PostListItem;
