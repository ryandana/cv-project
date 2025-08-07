"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "motion/react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "Hello I'm a web developer that loves to create beautiful and functional websites. Welcome to my personal website built with Next.js and Tailwind CSS.";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-dvh flex flex-col items-center justify-center px-4">
      <div className="absolute inset-0 w-full min-h-screen bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute inset-0 w-full h-full min-h-screen z-10 overflow-hidden pointer-events-auto">
        <Boxes />
      </div>
      <div className="z-30 text-center flex flex-col items-center gap-8 pointer-events-none">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-50 rounded-full"
          src="/img/pfp.jpg"
          alt="Profile picture"
        />
        <motion.h1
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-3xl sm:text-5xl font-bold"
          style={{ color: "var(--ctp-mocha-rosewater)" }}
        >
          I Putu Ryan Dana Putra
        </motion.h1>
        <motion.section
          initial={{ scale: 0, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 0.8,
            delay: 1,
          }}
        >
          <ContainerTextFlip
            words={["Fullstack", "Frontend", "Backend", "Mobile"]}
          />
        </motion.section>
        <motion.section
          initial={{ scale: 0, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            duration: 0.8,
            delay: 1.5,
          }}
          className="justify-center w-full lg:w-1/2"
        >
          <TextGenerateEffect words={words} />
        </motion.section>
      </div>
    </main>
  );
}
