import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Components from './Components';

type PostContentProps = {
  source: MDXRemoteSerializeResult;
};

const PostContent = ({ source }: PostContentProps) => (
  <MDXRemote {...source} components={Components} />
);

export default PostContent;
