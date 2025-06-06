import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string;
}

function ErrorMessage({message}:ErrorMessageProps) {
  return <p className={s.error}>{message}</p>;
}

export default ErrorMessage;