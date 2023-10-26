import React from "react";

export const ToasterContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function showToast({ variant, message }) {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message,
    };
    setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
    const updatedToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(updatedToasts);
  }

  function dismissAllToasts() {
    setToasts([]);
  }

  return (
    <ToasterContext.Provider
      value={{ toasts, showToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToasterContext.Provider>
  );
}

export default ToastProvider;
