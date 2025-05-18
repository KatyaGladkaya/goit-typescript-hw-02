import s from "./ImageCard.module.css";

type Image = {
  urls: {
    small: string;
  };
  alt_description: string;
};

type ImageCardProps = {
  image: Image;
  onClick: () => void;
}

function ImageCard({image, onClick}: ImageCardProps) {
  return (
    <div className={s.card} onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageCard;