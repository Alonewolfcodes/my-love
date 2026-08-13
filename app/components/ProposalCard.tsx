"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MovingNoButton from "./MovingNoButton";

const slides = [
  {
    image: "/photos/IMG_1.jpeg",
    text: "Am I the guy you see in your dreams?",
  },
  {
    image: "/photos/IMG_2.jpeg",
    text: "Am I the one after meeting whom you don't want anything else?",
  },
  {
    image: "/photos/IMG_3.jpeg",
    text: "Am I the one after meeting whom you don't want anything else?",
  },
  {
    image: "/photos/IMG_4.jpeg",
    text: "Am I the one with whom you feel you have everything?",
  },
  {
    image: "/photos/IMG_5.jpeg",
    text: "If I am the same person then you can live the happy moments of your life by tapping Yes.",
  },
];

const noMessages = [
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
  "NO 🥹",
];

const yesMessages = [
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
  "YES 🥰",
];

export default function ProposalCard() {
  const [index, setIndex] = useState(0);
  const [yes, setYes] = useState(false);

  const [noMessageIndex, setNoMessageIndex] = useState(0);
  const [yesMessageIndex, setYesMessageIndex] = useState(0);
  function nextSlide() {
    setIndex((prev) => (prev + 1) % slides.length);
    setNoMessageIndex(
      (prev) => (prev + 1) % noMessages.length
    );

    setYesMessageIndex(
      (prev) => (prev + 1) % yesMessages.length
    );
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
      className=" w-[90%] max-w-xl p-8 text-center relative"
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
              className="object-contain"
            />
          </div>

          <motion.p
            key={slides[index].text}
            className="romanticText"
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.96,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {slides[index].text}
          </motion.p>

        </motion.div>

      </AnimatePresence>

      <div className="relative mt-12 h-64 glass">

        <a
          href="tel:+917265089367"
          className="yesButton absolute left-12 bottom-10 px-5 py-2.5 rounded-full text-white text-sm font-semibold whitespace-nowrap"
        >
          {yesMessages[yesMessageIndex]}
        </a>

        <MovingNoButton onEscape={nextSlide} message={noMessages[noMessageIndex]} />

      </div>

    </motion.div>
  );
}