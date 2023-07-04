import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [list, setList] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    if (list.length > 0) {
      setList([]);
    }
  }, [list.length]);

  useEscapeKey(handleEscape);

  const addToast = React.useCallback(({ message, variant }) => {
    setList((prevList) => [
      ...prevList,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setList((prevList) => prevList.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ list, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
