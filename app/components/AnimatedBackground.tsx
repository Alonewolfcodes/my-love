"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "100vh",
            x: Math.random() * window.innerWidth,
            opacity: 0.4,
          }}
          animate={{
            y: "-20vh",
            opacity: 0,
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            position: "absolute",
            fontSize: 30,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}