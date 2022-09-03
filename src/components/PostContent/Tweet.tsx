import { useCallback, useEffect, useRef, useState } from 'react';

type TweetProps = {
  user: string;
  tweetId: string;
};

const Tweet = ({ user, tweetId }: TweetProps) => {
  const iframe = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(300);

  const handleLoad = useCallback(() => {
    iframe.current?.contentWindow?.postMessage(
      { element: iframe.current?.id, query: 'height' },
      'https://twitframe.com'
    );
  }, [iframe]);

  const handleMessage = useCallback((e: MessageEvent) => {
    if (e.origin !== 'https://twitframe.com') {
      return;
    }
    if (e.data.element !== iframe.current?.id) {
      return;
    }
    setHeight(parseInt(e.data.height, 10));
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  return (
    <iframe
      id={`tweet_${tweetId}`}
      ref={iframe}
      className="mb-5"
      frameBorder={0}
      height={height}
      width="100%"
      src={`https://twitframe.com/show?url=${encodeURIComponent(
        getTweetUrl(user, tweetId)
      )}`}
      onLoad={handleLoad}
    />
  );
};

const getTweetUrl = (user: string, tweetId: string) =>
  `https://twitter.com/${user}/status/${tweetId}`;

export default Tweet;
