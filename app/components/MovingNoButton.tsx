"use client";

import { useState } from "react";

export default function MovingNoButton({
  onEscape,
}: {
  onEscape: () => void;
}) {
  const [position, setPosition] = useState({
    left: 220,
    top: 20,
  });

  function move() {
    const left = Math.random() * 250;
    const top = Math.random() * 120;

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
      NO 😜
    </button>
  );
}