import Link from 'next/link';
import Iframe from './Iframe';

type ItchEmbedProps = {
  gameId: string;
  text?: string;
  link?: string;
};

const ItchGame = ({ gameId, text, link }: ItchEmbedProps) => (
  <Iframe src={`https://itch.io/embed/${gameId}`} ratio="100:24">
    {text && link && <Link href={link}>{text}</Link>}
  </Iframe>
);

export default ItchGame;
