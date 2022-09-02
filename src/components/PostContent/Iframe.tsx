import type { PropsWithChildren } from 'react';

type IframeProps = {
  src: string;
  ratio: string;
};

const ratioToPadding = (ratio: string) => {
  const [width, height] = ratio.split(':');
  return `${
    Math.round((parseInt(height, 10) / parseInt(width, 10)) * 10000) / 100
  }%`;
};

const Iframe = ({ src, ratio, children }: PropsWithChildren<IframeProps>) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: ratioToPadding(ratio),
      height: 0,
      marginBottom: '20px',
    }}
  >
    <iframe
      src={src}
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%;',
      }}
    ></iframe>
    {children}
  </div>
);

export default Iframe;
