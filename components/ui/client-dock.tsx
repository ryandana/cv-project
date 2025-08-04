"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconInfoCircle,
  IconRocket,
  IconUser,
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
    <div className="fixed bottom-4 left-0 w-full flex items-center justify-center z-50">
      <FloatingDock mobileClassName="mb-6" items={links} />
    </div>
  );
}
