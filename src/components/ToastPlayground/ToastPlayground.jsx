import React, { useCallback, useState } from "react";

import Button from "../Button";
import Toast, { VARIANT_OPTIONS } from "../Toast";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(() => VARIANT_OPTIONS[0]);

  const handleSumbit = useCallback((e) => {
    e.preventDefault();
    setIsToastOpen(true);
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <Toast
        isOpen={isToastOpen}
        variant={variant}
        onRequestClose={() => setIsToastOpen(false)}
      >
        {message}
      </Toast>

      <form onSubmit={handleSumbit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => {
                const id = `variant-${option}`;

                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={option}
                      checked={option === variant}
                      onChange={(event) => setVariant(event.target.value)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
