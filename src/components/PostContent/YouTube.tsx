import Iframe from './Iframe';

type YouTubeProps = {
  videoId: string;
};

const YouTube = ({ videoId }: YouTubeProps) => (
  <Iframe src={`https://www.youtube.com/embed/${videoId}`} ratio="16:10" />
);

export default YouTube;
