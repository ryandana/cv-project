"use client";

import React from "react";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <main>
      <BackgroundBeamsWithCollision className="relative z-20 min-h-dvh hidden lg:block">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-12 py-12 px-2 lg:py-[4%] lg:px-[15%] w-full">
          {/* Left Image Section */}
          <div className="w-full max-w-[400px] min-w-[200px] mb-8 lg:mb-0 lg:mr-8">
            <CardContainer>
              <CardItem translateZ="100" className="w-full mt-4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src="/img/about.jpeg"
                  className="lg:h-[600px] h-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          {/* Right Content Section */}
          <div className="flex-1 flex flex-col items-center lg:items-end gap-y-6 text-center lg:text-right w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold"
              style={{ color: "var(--ctp-mocha-rosewater)" }}
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl w-85 lg:w-full max-w-[600px] text-justify"
              style={{ color: "var(--ctp-mocha-lavender)" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              illum quos, ab sit voluptas minima praesentium dolorem laborum
              facere nihil aliquam quo officia porro quisquam temporibus illo
              impedit odit maiores recusandae quasi. Fuga quis obcaecati
              voluptatibus, consequatur labore non similique inventore
              consectetur neque consequuntur, nulla tenetur voluptas, porro
              vitae eum numquam incidunt alias quae harum asperiores quas quos?
              Similique mollitia minus beatae dolor minima aperiam voluptates
              soluta iste ratione,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl font-bold"
              style={{ color: "var(--ctp-mocha-rosewater)" }}
            >
              Tech Stack
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  Icon: IconBrandTailwind,
                  color: "var(--ctp-mocha-teal)",
                  title: "Tailwind CSS",
                  link: "https://tailwindcss.com/",
                },
                {
                  Icon: IconBrandNextjs,
                  color: "var(--ctp-mocha-text)",
                  title: "Next.js",
                  link: "https://nextjs.org/",
                },
                {
                  Icon: IconBrandLaravel,
                  color: "var(--ctp-mocha-red)",
                  title: "Laravel",
                  link: "https://laravel.com/",
                },
                {
                  Icon: IconBrandPhp,
                  color: "var(--ctp-mocha-mauve)",
                  title: "PHP",
                  link: "https://www.php.net/",
                },
                {
                  Icon: IconBrandPython,
                  color: "var(--ctp-mocha-yellow)",
                  title: "Python",
                  link: "https://www.python.org/",
                },
                {
                  Icon: IconBrandReact,
                  color: "var(--ctp-mocha-blue)",
                  title: "React",
                  link: "https://react.dev/",
                },
              ].map(({ Icon, color, title, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="p-4 rounded-3xl bg-[var(--ctp-mocha-surface0)] hover:bg-[var(--ctp-mocha-surface1)] transition-all duration-400"
                >
                  <Icon
                    className="h-full w-full"
                    style={{ color }}
                    title={title}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <section className="relative z-10 flex flex-col items-center justify-center py-12 px-4 lg:hidden">
        <div className="flex flex-col items-center justify-between gap-3 lg:gap-4 py-12 px-2 lg:py-[4%] lg:px-[15%] w-full">
          {/* Left Image Section */}
          <div className="w-full max-w-[400px] min-w-[200px]">
            <CardContainer>
              <CardItem translateZ="100" className="w-full mt-4">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  src="/img/about.jpeg"
                  className="h-[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardContainer>
          </div>

          {/* Right Content Section */}
          <div className="flex-1 flex flex-col items-center gap-y-10 text-center w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-bold"
              style={{ color: "var(--ctp-mocha-rosewater)" }}
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg w-full max-w-[600px] text-justify"
              style={{ color: "var(--ctp-mocha-lavender)" }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              illum quos, ab sit voluptas minima praesentium dolorem laborum
              facere nihil aliquam quo officia porro quisquam temporibus illo
              impedit odit maiores recusandae quasi. Fuga quis obcaecati
              voluptatibus, consequatur labore non similique inventore
              consectetur neque consequuntur, nulla tenetur voluptas, porro
              vitae eum numquam incidunt alias quae harum asperiores quas quos?
              Similique mollitia minus beatae dolor minima aperiam voluptates
              soluta iste ratione,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl font-bold"
              style={{ color: "var(--ctp-mocha-rosewater)" }}
            >
              Tech Stack
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {[
                {
                  Icon: IconBrandTailwind,
                  color: "var(--ctp-mocha-teal)",
                  title: "Tailwind CSS",
                  link: "https://tailwindcss.com/",
                },
                {
                  Icon: IconBrandNextjs,
                  color: "var(--ctp-mocha-text)",
                  title: "Next.js",
                  link: "https://nextjs.org/",
                },
                {
                  Icon: IconBrandLaravel,
                  color: "var(--ctp-mocha-red)",
                  title: "Laravel",
                  link: "https://laravel.com/",
                },
                {
                  Icon: IconBrandPhp,
                  color: "var(--ctp-mocha-mauve)",
                  title: "PHP",
                  link: "https://www.php.net/",
                },
                {
                  Icon: IconBrandPython,
                  color: "var(--ctp-mocha-yellow)",
                  title: "Python",
                  link: "https://www.python.org/",
                },
                {
                  Icon: IconBrandReact,
                  color: "var(--ctp-mocha-blue)",
                  title: "React",
                  link: "https://react.dev/",
                },
              ].map(({ Icon, color, title, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="p-4 rounded-3xl bg-[var(--ctp-mocha-surface0)] hover:bg-[var(--ctp-mocha-surface1)] transition-all duration-400"
                >
                  <Icon
                    className="h-full w-full"
                    style={{ color }}
                    title={title}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
