import React from "react";
import cn from "classnames";

const TabNav = ({ text, isActive, click }) => {
  return (
    <button
      className={cn({
        "relative py-4 font-bold text-custom-dark text-opacity-70 hover:text-opacity-100 transition-all bg-transparent text-[20px]": true,
        "after:absolute after:after-content text-opacity-100 after:h-1 after:w-full after:bg-custom-dark after:bottom-0 after:left-0 after:rounded-t-md": isActive,
      })}
      onClick={() => click()}
    >
      {text}
    </button>
  );
};

export default TabNav;
