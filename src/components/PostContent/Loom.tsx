import Iframe from './Iframe';

type LoomProps = {
  videoId: string;
};

const Loom = ({ videoId }: LoomProps) => (
  <Iframe src={`https://www.loom.com/embed/${videoId}`} ratio="16:10" />
);

export default Loom;
