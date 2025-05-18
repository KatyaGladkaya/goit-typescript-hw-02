import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

function Loader() {
  return (
    <div className={s.loader}>
      <ClipLoader size={35} color="#3f51b5" loading={true} />
    </div>
  );
}

export default Loader;