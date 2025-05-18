import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../types.ts/image"

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