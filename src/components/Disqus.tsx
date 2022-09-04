import { useEffect, useState } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import type { PostMetadata } from '@lib/posts';
import Config from '@lib/config';

type DisqusProps = {
  post: PostMetadata;
};

const Disqus = ({ post }: DisqusProps) => {
  const [showDisqus, setShowDisqus] = useState(false);
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      setShowDisqus(true);
    }
  }, [setShowDisqus]);

  return showDisqus && !post.disableComments ? (
    <DiscussionEmbed
      shortname={Config.disqusShortname}
      config={{
        identifier: `${Config.url}/${post.slug}`,
        title: post.title,
      }}
    />
  ) : null;
};

export default Disqus;
