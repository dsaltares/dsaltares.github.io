import Link from 'next/link';

type ItchEmbedProps = {
  gameId: string;
  text?: string;
  link?: string;
};

const ItchGame = ({ gameId, text, link }: ItchEmbedProps) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: '24%',
      height: 0,
      marginBottom: '20px',
    }}
  >
    <iframe
      src={`https://itch.io/embed/${gameId}`}
      frameBorder="0"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%;',
      }}
    ></iframe>
    {text && link && (
      <Link href={link}>
        <a>{text}</a>
      </Link>
    )}
  </div>
);

export default ItchGame;
