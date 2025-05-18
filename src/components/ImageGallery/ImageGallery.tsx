import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

type Image = {
  id: string;
  width: number;
  height: number;
  urls: {
    small: string;
  };
  alt_description: string;
};

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (image: Image) => void;
};

function ImageGallery({images, onImageClick}: ImageGalleryProps) {
    const horizontalImages = images.filter((img) => img.width > img.height);
  if (horizontalImages.length === 0) return null;
  return (
    <ul className={s.list}>
      {horizontalImages.map((img) => (
        <li key={img.id}>
          <div>
            <ImageCard image={img} onClick={() => onImageClick(img)} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;