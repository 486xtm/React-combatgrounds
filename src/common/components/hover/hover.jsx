import React, { useState, useEffect } from "react";

const Hover = ({ children, type = "attack", show = false }) => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY + window.pageYOffset });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const style = {
    position: "absolute",
    left: position.x,
    top: position.y,
    transform: "translate(-50%, 30px)",
  };

  return (
    <div
      className={`transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } w-[200px]  rounded-lg bg-[black] shadow-lg border-[1px] text-center px-1 py-2 ${
        type == "attack" || type == "level"
          ? "shadow-[red] border-[red]"
          : type == "defence" || type == "defended"
          ? "shadow-[blue] border-[blue]"
          : type == "combo"
          ? "shadow-[purple] border-[purple]"
          : type == "income" || type == "wins"
          ? "shadow-[green] border-[green]"
          : "shadow-[gray] border-[gray]"
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Hover;
