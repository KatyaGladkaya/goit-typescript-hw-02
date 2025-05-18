import Modal from "react-modal";
import s from "./ImageModal.module.css";


function ImageModal({ image, onClose }) {
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