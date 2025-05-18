import s from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={s.wrapper}>
      <button className={s.loadButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;