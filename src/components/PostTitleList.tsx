import type { PostMetadata } from '@lib/posts';
import PostTitleListItem from './PostTitleListItem';

type PostTitleListProps = {
  posts: PostMetadata[];
};

const PostTitleList = ({ posts }: PostTitleListProps) => (
  <ul className="flex flex-col gap-3">
    {posts.map((post) => (
      <PostTitleListItem key={post.slug} post={post} />
    ))}
  </ul>
);

export default PostTitleList;
