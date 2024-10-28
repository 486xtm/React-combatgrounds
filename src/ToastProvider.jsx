import React, { createContext, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a context for toasts
const ToastContext = createContext();

// Create a provider component
export const ToastProvider = ({ children }) => {
  // Define functions to show different types of toasts
  const showToast = (message) => toast(message);
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);
  const showInfo = (message) => toast.info(message);
  const showWarning = (message) => toast.warn(message);

  return (
    <ToastContext.Provider
      value={{ showToast, showSuccess, showError, showInfo, showWarning }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={2000} />
    </ToastContext.Provider>
  );
};

// Create a custom hook to use the toast context
export const useToast = () => useContext(ToastContext);
