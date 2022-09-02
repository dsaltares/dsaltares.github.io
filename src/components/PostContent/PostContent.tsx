import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Components from './Components';

type PostContentProps = {
  source: MDXRemoteSerializeResult;
};

const PostContent = ({ source }: PostContentProps) => (
  <article className="text-content">
    <MDXRemote {...source} components={Components} />
  </article>
);

export default PostContent;
