import React from "react";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, type = "attack"}) => {
  const [isAnimating, setIsAnimating] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Match this duration with the CSS transition duration
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
        className={`bg-[#000000] text-white ${type == 'crew_ads' ? `shadow-[#666630]`: type == "attack" ? "shadow-[red]" : type == "defence" ? 'shadow-[blue]' : type == "combo" ? "shadow-[purple]" : "shadow-[green]"} border-double border-2 border-[white] p-4 rounded shadow-2xl transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-90"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
