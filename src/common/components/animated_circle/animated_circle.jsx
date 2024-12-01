import React, { useState, useEffect } from "react";

export const AnimatedCircle = ({ style }) => {
  const [isRed, setIsRed] = useState(false);
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRed((prev) => !prev); // Toggle between red and white
    }, 800); // Change every second

    const interval2 = setInterval(() => {
      setIsLarge((prev) => !prev); // Toggle between small and large size
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    }; // Cleanup interval on unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "10px",
        height: "10px",
        ...style,
      }}
    >
      <div
        style={{
          width: isLarge ? "0px" : "10px",
          height: isLarge ? "0px" : "10px",
          borderRadius: "50%",
          backgroundColor: isRed ? "red" : "white",
          transition:
            "background-color 0.8s ease, width 0.2s ease, height 0.2s ease",
        }}
      />
    </div>
  );
};
