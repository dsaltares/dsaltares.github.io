import Link from 'next/link';
import type { PostMetadata } from '@lib/posts';

type PostSeriesProps = {
  name: string;
  posts: PostMetadata[];
};

const PostSeries = ({ name, posts }: PostSeriesProps) => (
  <>
    <p className="mb-5">{`${name} series:`}</p>
    <ol className="list-decimal pl-10 mb-5">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link className="text-contentLink" href={`/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ol>
    <hr className="my-5" />
  </>
);

export default PostSeries;
