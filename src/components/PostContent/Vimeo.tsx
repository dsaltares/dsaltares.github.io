import Iframe from './Iframe';

type VimeoProps = {
  videoId: string;
};

const Vimeo = ({ videoId }: VimeoProps) => (
  <Iframe src={`https://player.vimeo.com/video/${videoId}`} ratio="16:10" />
);

export default Vimeo;
