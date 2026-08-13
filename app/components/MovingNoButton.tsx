"use client";

import { useState } from "react";

export default function MovingNoButton({
  onEscape,
  message
}: {
  onEscape: () => void;
  message: string;
}) {
  const [position, setPosition] = useState({
    left: 220,
    top: 20,
  });

  function move() {
    let left = position.left;
    let top = position.top;

    do {
      left = Math.random() * 250;
      top = Math.random() * 120;
    } while (
      Math.abs(left - position.left) < 120 &&
      Math.abs(top - position.top) < 80
    );

    setPosition({
      left,
      top,
    });

    onEscape();
  }

  return (
    <button
      onMouseEnter={move}
      onTouchStart={move}
      style={{
        position: "absolute",
        left: position.left,
        top: position.top,
        transition: "0.25s",
      }}
      className="bg-gray-700 hover:bg-black text-white px-8 py-4 rounded-full text-xl"
    >
     {message}
    </button>
  );
}