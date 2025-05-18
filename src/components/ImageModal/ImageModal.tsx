import Modal from "react-modal";
import s from "./ImageModal.module.css";

type Image = {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
  description: string | null;
};

type ImageModalProps = {
  image: Image | null;
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {image && (
        <div>
          <img src={image.urls.regular} alt={image.alt_description} />
          <p>Author: {image.user.name}</p>
          <p>Likes: {image.likes}</p>
          <p>Description: {image.description || "No description"}</p>
        </div>
      )}
    </Modal>
  );
}

export default ImageModal;