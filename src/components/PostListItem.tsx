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
        <Link className="text-contentLink" href={`/${post.slug}`}>
          {`Read on →`}
        </Link>
      </>
    )}
  </article>
);

export default PostListItem;
