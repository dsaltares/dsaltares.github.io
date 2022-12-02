import dynamic from 'next/dynamic';
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from 'react';
import Audio from './Audio';
import CodeSandbox from './CodeSandbox';
import ItchGame from './ItchGame';
import Loom from './Loom';
import Slideshare from './Slideshare';
import Tweet from './Tweet';
import Vimeo from './Vimeo';
import YouTube from './YouTube';

const Components = {
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => <a className="text-contentLink text-xl" {...props} />,
  code: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => (
    <code
      className="text-code bg-codeBg px-2 py-1 text-base rounded"
      {...props}
    />
  ),
  img: ({
    title,
    ...props
  }: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    const imgElement = <img className="mb-1" {...props} />;
    return title ? (
      <figure className="mb-5">
        {imgElement}
        <figcaption className="text-center text-xs">{title}</figcaption>
      </figure>
    ) : (
      imgElement
    );
  },
  Audio,
  ImageGallery: dynamic(() => import('@components/PostContent/ImageGallery')),
  ItchGame,
  YouTube,
  Loom,
  Vimeo,
  Tweet,
  CodeSandbox,
  Slideshare,
};

export default Components;
