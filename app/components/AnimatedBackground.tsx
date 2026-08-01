"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function AnimatedBackground() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 18 + Math.random() * 18,
      duration: 8 + Math.random() * 5,
      delay: Math.random() * 5,
    }));

    setHearts(generatedHearts);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: "110vh",
            x: `${heart.left}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            fontSize: `${heart.size}px`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}