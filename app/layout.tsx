"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // No scroll-based section tracking; use pathname for active link

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("vertical-nav");
      const toggle = document.getElementById("menu-toggle");

      if (
        isMenuOpen &&
        nav &&
        toggle &&
        !nav.contains(event.target as Node) &&
        !toggle.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👨‍💻" },
    { href: "/projects", label: "Projects", icon: "🚀" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning
        className={`${poppins.variable} font-poppins antialiased min-h-screen`}
        style={{
          background: "var(--ctp-mocha-base, #1e1e2e)",
          color: "var(--ctp-mocha-text, #cdd6f4)",
        }}
      >
        {/* Mobile Menu Toggle - Only visible on mobile */}
        <button
          id="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden fixed top-6 left-6 z-[60] flex flex-col justify-center items-center w-12 h-12 cursor-pointer group rounded-xl transition-all duration-300 hover:scale-110"
          style={{
            background: "rgba(30, 30, 46, 0.9)",
            backdropFilter: "blur(20px)",
            border: "2px solid var(--ctp-mocha-surface2, #585b70)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          }}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 mb-1 transition-all duration-300 rounded-full ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
            style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
          />
          <span
            className={`block w-5 h-0.5 mb-1 transition-all duration-300 rounded-full ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 rounded-full ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
            style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
          />
        </button>

        {/* Vertical Navigation Sidebar */}
        <nav
          id="vertical-nav"
          className={`group fixed left-4 top-4 bottom-4 z-50 flex flex-col transition-all duration-300 ease-in-out rounded-2xl
            ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
            w-20 lg:w-20 lg:group-hover:w-72
          `}
          style={{
            background: "rgba(30, 30, 46, 0.9)",
            backdropFilter: "blur(20px)",
            border: "2px solid var(--ctp-mocha-surface2, #585b70)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(180, 190, 254, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Logo Section */}
          <div
            className="p-3 lg:p-4 border-b-2 transition-all duration-300"
            style={{ borderColor: "var(--ctp-mocha-surface1, #45475a)" }}
          >
            <a
              href="/"
              className="flex items-center group-hover/nav:justify-start gap-3 lg:gap-0 group-hover/nav:gap-3 font-bold text-lg tracking-tight group/logo transition-all duration-300"
              style={{ color: "var(--ctp-mocha-rosewater, #f5e0dc)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover/logo:scale-110 flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--ctp-mocha-mauve, #cba6f7) 0%, var(--ctp-mocha-pink, #f5c2e7) 100%)",
                  boxShadow: "0 6px 24px rgba(203, 166, 247, 0.3)",
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--ctp-mocha-base, #1e1e2e)" }}
                >
                  CV
                </span>
              </div>
              <span className="opacity-100 lg:pl-2 group-hover/nav:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
                Portfolio
              </span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 py-6 px-2 lg:px-3 space-y-1 overflow-visible transition-all duration-300">
            {navItems.map((item) => {
              // Only highlight active nav after mount to avoid hydration mismatch
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="relative">
                  <a
                    href={item.href}
                    className={`flex items-center justify-start gap-3 font-medium px-2 lg:px-3 py-3 rounded-xl transition-all duration-300 group/item relative cursor-pointer w-full
                      ${
                        isActive
                          ? "text-white shadow-lg"
                          : "text-gray-300 hover:text-white hover:bg-blue-500/10"
                      }
                    `}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, var(--ctp-mocha-blue, #89b4fa) 0%, var(--ctp-mocha-lavender, #b4befe) 100%)"
                        : "transparent",
                      boxShadow: isActive
                        ? "0 4px 20px rgba(137, 180, 250, 0.3)"
                        : "none",
                      color: isActive
                        ? "var(--ctp-mocha-base, #1e1e2e)"
                        : "var(--ctp-mocha-subtext1, #bac2de)",
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                        style={{ background: "var(--ctp-mocha-base, #1e1e2e)" }}
                      />
                    )}

                    <span className="text-xl flex-shrink-0 z-10 relative flex items-center justify-center w-8 h-8">
                      {item.icon}
                    </span>
                    <span className="whitespace-nowrap opacity-0 lg:group-hover:opacity-100 transition-all duration-300 text-sm z-10 relative lg:pl-2">
                      {item.label}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </nav>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Page Content */}
        <div className="lg:ml-24 transition-all duration-300">{children}</div>
      </body>
    </html>
  );
}
