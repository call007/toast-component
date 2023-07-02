import React from "react";
import Button from "../Button";
import { useToastContext } from "../ToastProvider";
import { VARIANT_OPTIONS } from "../Toast";

import styles from "./ToastPlayground.module.css";

const DEFAULT_VARIANT = VARIANT_OPTIONS[0];

function ToastPlaygroundForm() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(() => DEFAULT_VARIANT);
  const { addToast } = useToastContext();

  const handleSumbit = React.useCallback(
    (e) => {
      e.preventDefault();
      addToast({ message, variant });
      setMessage("");
      setVariant(DEFAULT_VARIANT);
    },
    [message, variant]
  );

  return (
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
  );
}

export default ToastPlaygroundForm;
