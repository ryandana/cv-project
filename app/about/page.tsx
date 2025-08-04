"use client";

import React from "react";
import { motion } from "motion/react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  IconBrandGithub,
  IconBrandHtml5,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandPython,
  IconBrandReact,
  IconBrandSass,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { title } from "process";

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
    <BackgroundBeamsWithCollision className="relative z-20 min-h-screen">
      <div className="flex items-center justify-between gap-12 py-[4%] px-[15%] w-full">
        {/* Left Image Section */}
        <div className="w-[400px] min-w-[300px]">
          <CardContainer>
            <CardItem translateZ="100" className="w-full mt-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src="/img/about.jpeg"
                className="h-[600px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardContainer>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 flex flex-col items-end gap-y-6 text-right">
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
            className="text-xl w-full max-w-[600px] text-justify"
            style={{ color: "var(--ctp-mocha-lavender)" }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illum quos, ab sit voluptas minima praesentium dolorem laborum
            facere nihil aliquam quo officia porro quisquam temporibus illo
            impedit odit maiores recusandae quasi. Fuga quis obcaecati
            voluptatibus, consequatur labore non similique inventore consectetur
            neque consequuntur, nulla tenetur voluptas, porro vitae eum numquam
            incidunt alias quae harum asperiores quas quos? Similique mollitia
            minus beatae dolor minima aperiam voluptates soluta iste ratione,
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
  );
}
