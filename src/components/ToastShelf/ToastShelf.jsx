import React from "react";

import { useToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { list, removeToast, removeAllToasts } = useToastContext();

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (list.length > 0 && event.code === "Escape") {
        removeAllToasts();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (list.length == 0) return null;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {list.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            variant={toast.variant}
            onRequestClose={() => removeToast(toast.id)}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
