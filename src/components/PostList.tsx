import type { PostMetadata } from '@lib/posts';
import PostListItem from './PostListItem';

type PostListProps = {
  posts: PostMetadata[];
};

const PostList = ({ posts }: PostListProps) => (
  <div className="flex flex-col gap-20">
    {posts.map((post) => (
      <PostListItem key={post.href} post={post} />
    ))}
  </div>
);

export default PostList;
