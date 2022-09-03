import Iframe from './Iframe';

type SlideshareProps = {
  id: string;
};

const Slideshare = ({ id }: SlideshareProps) => (
  <Iframe
    src={`www.slideshare.net/slideshow/embed_code/key/${id}`}
    ratio="16:10"
  />
);

export default Slideshare;
