"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words =
  "Hello I'm a web developer that loves to create beautiful and functional websites. Welcome to my personal website built with Next.js and Tailwind CSS.";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="absolute inset-0 w-full min-h-screen bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute inset-0 w-full h-full min-h-screen z-10 overflow-hidden pointer-events-auto">
        <Boxes />
      </div>
      <div className="z-30 text-center flex flex-col items-center gap-4 pointer-events-none">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-50 rounded-full"
          src="/img/pfp.jpg"
          alt=""
        />
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-2xl sm:text-3xl font-bold"
          style={{ color: "var(--ctp-mocha-rosewater)" }}
        >
          I Putu Ryan Dana Putra
        </motion.h1>
        <div className="justify-center w-1/2">
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </main>
  );
}
