import s from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={s.wrapper}>
      <button className={s.loadButton} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;