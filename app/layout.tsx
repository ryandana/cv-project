"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconInfoCircle,
  IconNewSection,
  IconRocket,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      title: "GitHub",
      icon: (
        <IconBrandGithub
          className="h-full w-full transition-colors duration-200"
          style={{ color: "var(--ctp-mocha-mauve, #cba6f7)" }}
        />
      ),
      href: "https://github.com/ryandana",
    },
  ];

  return (
    <html suppressHydrationWarning lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased`}
        style={{
          background: "var(--ctp-mocha-base, #1e1e2e)",
          color: "var(--ctp-mocha-text, #cdd6f4)",
        }}
      >
        <div className="relative min-h-screen w-full">
          {children}
          <div className="fixed bottom-4 left-0 w-full flex items-center justify-center z-50">
              <FloatingDock mobileClassName="mb-6" items={links} />
          </div>
        </div>
      </body>
    </html>
  );
}
