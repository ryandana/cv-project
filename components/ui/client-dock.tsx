"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import { motion } from "motion/react";
import {
  IconHome,
  IconInfoCircle,
  IconRocket,
  IconUser,
  IconBook,
} from "@tabler/icons-react";

export function ClientDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-blue, #89b4fa)" }}
        />
      ),
      href: "/",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-green, #a6e3a1)" }}
        />
      ),
      href: "/about",
    },
    {
      title: "Projects",
      icon: (
        <IconRocket
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-yellow, #f9e2af)" }}
        />
      ),
      href: "/projects",
    },
    {
      title: "Contact",
      icon: (
        <IconUser
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-pink, #f5c2e7)" }}
        />
      ),
      href: "/contact",
    },
    {
      title: "Blog",
      icon: (
        <IconBook
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-maroon)" }}
        />
      ),
      href: "/blog",
    },
  ];

  return (
    <motion.div
      initial={{opacity:0, y: 100 }}
      animate={{opacity:1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed bottom-4 left-0 w-full flex items-center justify-center z-50"
    >
      {/* Desktop dock stays centered, mobile dock is positioned bottom right */}
      <FloatingDock
        mobileClassName="fixed bottom-4 right-4 md:hidden"
        items={links}
      />
    </motion.div>
  );
}
