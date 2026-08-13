"use client";

import { useState } from "react";

export default function MovingNoButton({
  onEscape,
  message,
}: {
  onEscape: () => void;
  message: string;
}) {
  const [position, setPosition] = useState({
    left: 210,
    top: 45,
  });

  function move() {
    let left = position.left;
    let top = position.top;

    do {
      left = Math.random() * 210;
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
      className="whitespace-nowrap bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg"
    >
      {message}
    </button>
  );
}