"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { useState } from "react";
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

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased min-h-screen`}
        style={{
          background: "var(--ctp-mocha-base, #1e1e2e)",
          color: "var(--ctp-mocha-text, #cdd6f4)",
        }}
      >
        <nav
          className="px-5 py-3 flex items-center justify-between fixed top-4 left-4 right-4 z-50 backdrop-blur-xl border-2 shadow-2xl rounded-3xl transition-all duration-300 hover:shadow-3xl"
          style={{
            background: "rgba(30, 30, 46, 0.8)",
            borderColor: "var(--ctp-mocha-surface2, #585b70)",
            width: "calc(100vw - 2rem)",
            boxShadow: `
              0 25px 50px -12px rgba(17, 17, 27, 0.8),
              0 0 0 1px rgba(180, 190, 254, 0.1),
              inset 0 1px 0 0 rgba(205, 214, 244, 0.1)
            `,
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 font-bold text-2xl tracking-tight group transition-all duration-300"
            style={{ color: "var(--ctp-mocha-rosewater, #f5e0dc)" }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, var(--ctp-mocha-mauve, #cba6f7) 0%, var(--ctp-mocha-pink, #f5c2e7) 100%)",
                boxShadow: "0 8px 32px rgba(203, 166, 247, 0.3)",
              }}
            >
              <span
                className="text-base font-bold"
                style={{ color: "var(--ctp-mocha-base, #1e1e2e)" }}
              >
                CV
              </span>
            </div>
            <span className="hidden sm:block group-hover:text-opacity-80 transition-all duration-300">
              Portfolio
            </span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer group rounded-lg transition-all duration-300 hover:bg-opacity-20 relative"
            style={{ background: "var(--ctp-mocha-surface1, #45475a)" }}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 rounded-full ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
            <span
              className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 rounded-full ${
                isMenuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 rounded-full ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
          </button>

          {/* Navigation Links */}
          <div
            className={`flex-col sm:flex-row flex gap-2 sm:gap-1 items-center
              sm:static sm:w-auto sm:rounded-none sm:mt-0
              fixed left-0 right-0 top-20
              w-full
              z-50
              transition-[max-height,opacity,visibility] ${
                isMenuOpen ? "duration-700" : "duration-300"
              } ease-in-out
              rounded-2xl
              px-6 sm:px-0
              py-6 sm:py-0
              mt-0 sm:mt-0
              ${
                isMenuOpen
                  ? "max-h-96 border-2 shadow-2xl opacity-100 visible"
                  : "max-h-0 pointer-events-none border-0 shadow-none opacity-0 invisible"
              }
              sm:max-h-none sm:pointer-events-auto sm:border-none sm:shadow-none sm:opacity-100 sm:visible
            `}
            style={{
              background: "rgba(30, 30, 46, 0.95)",
              borderColor: "var(--ctp-mocha-surface2, #585b70)",
              backdropFilter: "blur(20px)",
            }}
          >
            {[
              { href: "/", label: "Home", icon: "🏠" },
              { href: "/about", label: "About", icon: "👨‍💻" },
              { href: "/projects", label: "Projects", icon: "🚀" },
              { href: "/contact", label: "Contact", icon: "📧" },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 sm:gap-2 font-regular px-4 py-3 sm:py-2 rounded-xl transition-all duration-300 group hover:scale-105 relative overflow-hidden min-w-0 w-full sm:w-auto"
                style={{
                  color: "var(--ctp-mocha-subtext1, #bac2de)",
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, var(--ctp-mocha-blue, #89b4fa) 0%, var(--ctp-mocha-lavender, #b4befe) 100%)";
                  e.currentTarget.style.color =
                    "var(--ctp-mocha-base, #1e1e2e)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(137, 180, 250, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color =
                    "var(--ctp-mocha-subtext1, #bac2de)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span className="text-lg sm:hidden">{item.icon}</span>
                <span className="whitespace-nowrap">{item.label}</span>

                {/* Subtle glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(137, 180, 250, 0.1) 0%, rgba(180, 190, 254, 0.1) 100%)",
                  }}
                />
              </a>
            ))}
          </div>
        </nav>

        {/* Page Content */}
        <div>{children}</div>
      </body>
    </html>
  );
}
