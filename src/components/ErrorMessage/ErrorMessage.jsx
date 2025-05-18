import s from "./ErrorMessage.module.css";

function ErrorMessage({ message }) {
  return <p className={s.error}>{message}</p>;
}

export default ErrorMessage;