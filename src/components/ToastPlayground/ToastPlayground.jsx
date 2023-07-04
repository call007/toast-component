import toastImage from "../../static/toast.png";

import ToastShelf from "../ToastShelf";
import ToastPlaygroundForm from "./ToastPlaygroundForm";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toastImage} />
        <h1>Toast Playground</h1>
      </header>

      <ToastPlaygroundForm />

      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
