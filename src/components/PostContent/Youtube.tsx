import Iframe from './Iframe';

type YoutubeProps = {
  videoId: string;
};

const Youtube = ({ videoId }: YoutubeProps) => (
  <Iframe src={`https://www.youtube.com/embed/${videoId}`} ratio="16:10" />
);

export default Youtube;
