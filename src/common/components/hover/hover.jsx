import React, { useState, useEffect } from "react";

const Hover = ({ children, type = "attack" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
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
    transform: "translate(-50%, 20px)",
  };

  return (
    <div
      className={`w-[150px] h-[80px] rounded-lg bg-[black] shadow-lg border-[1px] text-center p-1 ${
        type == "attack"
          ? "shadow-[red] border-[red]"
          : type == "defence"
          ? "shadow-[blue] border-[blue]"
          : type == "combo"
          ? "shadow-[purple] border-[purple]"
          : "shadow-[green] border-[green]"
      }`}
      style={style}
    >
      {children}
    </div>
  ); // Example content
};

export default Hover;
