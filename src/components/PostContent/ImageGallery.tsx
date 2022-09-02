import BaseImageGallery from 'react-image-gallery';

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => (
  <div className="mb-5">
    <BaseImageGallery
      items={images.map((image) => ({ original: image, thumbnail: image }))}
      showThumbnails
    />
  </div>
);

export default ImageGallery;
