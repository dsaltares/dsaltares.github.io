type AudioProps = {
  src: string;
};

const Audio = ({ src }: AudioProps) => (
  <audio className="mb-5" controls>
    <source src={src} />
  </audio>
);

export default Audio;
