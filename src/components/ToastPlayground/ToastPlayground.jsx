import React, { useCallback, useState } from "react";

import Button from "../Button";
import { VARIANT_OPTIONS } from "../Toast";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlayground() {
  const [list, setList] = useState([]);
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(() => DEFAULT_VARIANT);

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      setList((prevList) => [
        ...prevList,
        { id: crypto.randomUUID(), message, variant },
      ]);
      setMessage("");
      setVariant(DEFAULT_VARIANT);
    },
    [message, variant]
  );

  const removeToast = useCallback((id) => {
    setList((prevList) => {
      return prevList.filter((toast) => toast.id !== id);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf list={list} removeToast={removeToast} />

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
