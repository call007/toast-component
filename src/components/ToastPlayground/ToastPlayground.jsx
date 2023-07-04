import ToastShelf from "../ToastShelf";
import ToastPlaygroundForm from "./ToastPlaygroundForm";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastPlaygroundForm />

      <ToastShelf />
    </div>
  );
}

export default ToastPlayground;
