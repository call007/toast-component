import React from "react";

const ToastContext = React.createContext({});

function ToastProvider({ children }) {
  const [list, setList] = React.useState([]);

  const addToast = React.useCallback(({ message, variant }) => {
    setList((prevList) => [
      ...prevList,
      { id: crypto.randomUUID(), message, variant },
    ]);
  }, []);

  const removeToast = React.useCallback((id) => {
    setList((prevList) => prevList.filter((toast) => toast.id !== id));
  }, []);

  const removeAllToasts = React.useCallback(() => {
    setList([]);
  }, []);

  return (
    <ToastContext.Provider
      value={{ list, addToast, removeToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = () => React.useContext(ToastContext);

export default ToastProvider;
