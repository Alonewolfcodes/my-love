"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MovingNoButton from "./MovingNoButton";

const slides = [
  {
    image: "/photos/pic1.jpeg",
    text: "They are so cute together right!!! ❤️",
  },
  {
    image: "/gifs/PIC2.gif",
    text: "Still trying to press No? 😂",
  },
  {
    image: "/gifs/PIC1.gif",
    text: "I really neead a hug like this 😏",
  },
  {
    image: "/gifs/PIC2.gif",
    text: "No button is a little shy today ❤️",
  },
  {
    image: "/gifs/PIC1.gif",
    text: "You look beautiful every day ❤️",
  },
  {
    image: "/gifs/PIC2.gif",
    text: "Maybe YES is the better choice 😉",
  },
  {
    image: "/gifs/PIC1.gif",
    text: "One last question...",
  },
];

export default function ProposalCard() {
  const [index, setIndex] = useState(0);
  const [yes, setYes] = useState(false);

  function nextSlide() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  if (yes) {
    return (
      <motion.div
        className="glass w-[90%] max-w-xl p-10 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <h1 className="text-6xl mb-5">❤️</h1>

        <h2 className="text-4xl font-bold">
          YAYYYYY!!!
        </h2>

        <p className="mt-6 text-xl">
          You just made me the happiest person ❤️
        </p>

        <p className="mt-3 text-lg">
          I promise to always keep you smiling 😊
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="glass w-[90%] max-w-xl p-8 text-center relative"
      initial={{ scale: .8 }}
      animate={{ scale: 1 }}
    >
      <AnimatePresence mode="wait">

        <motion.div
          key={slides[index].image}
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: .5 }}
        >

          <div className="relative w-full h-[350px] rounded-3xl overflow-hidden">

            <Image
              src={slides[index].image}
              fill
              alt=""
              className="object-cover"
            />

          </div>

          <motion.p
            key={slides[index].text}
            className="text-2xl mt-6 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {slides[index].text}
          </motion.p>

        </motion.div>

      </AnimatePresence>

      <div className="relative mt-12 h-40" style={{ backgroundColor: 'red' }}>

        <button
          onClick={() => setYes(true)}
          className="absolute left-12 bottom-10 bg-pink-600 hover:bg-pink-700 transition px-8 py-4 rounded-full text-white text-xl"
        >
          YES ❤️
        </button>

        <MovingNoButton onEscape={nextSlide} />

      </div>

    </motion.div>
  );
}