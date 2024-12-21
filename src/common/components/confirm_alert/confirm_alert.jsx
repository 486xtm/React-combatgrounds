import React, { useState, useEffect } from "react";

export const ConfirmAlert = ({
  isOpen,
  description = "Really? This operation can't be roll back",
  onClose = () => {},
  onAccept = () => {},
}) => {
  const handleDelete = () => {
    onAccept();
  };

  const [isAnimating, setIsAnimating] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 min-w-1/3 transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 my-auto"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
        <p className="whitespace-pre-line">{description}</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => onClose()}
            className="px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
