import type {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
  OlHTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
} from 'react';
import Audio from './Audio';
import ImageGallery from './ImageGallery';
import ItchGame from './ItchGame';
import Loom from './Loom';
import YouTube from './YouTube';

const Components = {
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >
  ) => <p className="mb-5 text-xl" {...props} />,
  a: (
    props: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  ) => <a className="text-contentLink text-xl" {...props} />,
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h1 className="text-primary text-4xl font-bold mt-4 mb-2" {...props} />,
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h2 className="text-primary text-3xl font-bold mt-4 mb-2" {...props} />,
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h3 className="text-primary text-2xl font-bold mt-4 mb-2" {...props} />,
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h4 className="text-primary text-xl font-bold mt-4 mb-2" {...props} />,
  h5: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h5 className="text-primary text-xl font-bold mt-4 mb-2" {...props} />,
  h6: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  ) => <h6 className="text-primary text-xl font-bold mt-4 mb-2" {...props} />,
  code: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => (
    <code
      className="text-code bg-codeBg px-2 py-1 text-base rounded"
      {...props}
    />
  ),
  ul: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
  ) => <ul className="list-disc mb-5 pl-10" {...props} />,
  ol: (
    props: DetailedHTMLProps<
      OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >
  ) => <ol className="list-decimal mb-5 pl-10" {...props} />,
  table: (
    props: DetailedHTMLProps<
      TableHTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >
  ) => (
    <table
      className="mb-5 border border-solid border-neutral-200 border-collapse"
      {...props}
    />
  ),
  tr: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableRowElement>,
      HTMLTableRowElement
    >
  ) => <tr className="odd:bg-neutral-100" {...props} />,
  td: (
    props: DetailedHTMLProps<
      TdHTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    >
  ) => (
    <td
      className="px-2 py-1 border border-solid border-neutral-200"
      {...props}
    />
  ),
  th: (
    props: DetailedHTMLProps<
      TdHTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    >
  ) => (
    <th
      className="px-2 py-1 border border-solid border-neutral-200 bg-white"
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
      <figure>
        {imgElement}
        <figcaption className="text-center text-xs">{title}</figcaption>
      </figure>
    ) : (
      imgElement
    );
  },
  blockquote: (
    props: DetailedHTMLProps<
      BlockquoteHTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >
  ) => (
    <blockquote
      className="my-4 py-2 pl-6 border-l-4 border-neutal-200"
      {...props}
    />
  ),
  strong: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => <strong className="font-bold text-primary" {...props} />,
  Audio,
  ImageGallery,
  ItchGame,
  YouTube,
  Loom,
};

export default Components;
