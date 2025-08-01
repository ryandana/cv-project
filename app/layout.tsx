"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <nav
          className="px-6 py-4 flex items-center justify-between fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur border shadow-lg rounded-2xl"
          style={{
            background: "var(--ctp-mocha-surface0, #1e1e2e)",
            borderColor: "var(--ctp-mocha-surface2, #585b70)",
            maxWidth: "700px",
            width: "calc(100% - 2rem)",
          }}
        >
          <a
            href="/"
            className="flex items-center gap-2 font-semibold text-lg tracking-tight font-poppins"
            style={{ color: "var(--ctp-mocha-rosewater, #f5e0dc)" }}
          >
            CV
          </a>
          <input id="nav-toggle" type="checkbox" className="peer hidden" />
          <label
            htmlFor="nav-toggle"
            className="sm:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          >
            <span
              className="block w-6 h-0.5 mb-1 transition-all duration-300"
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
            <span
              className="block w-6 h-0.5 mb-1 transition-all duration-300"
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{ background: "var(--ctp-mocha-text, #cdd6f4)" }}
            />
          </label>
          <div
            className="flex-col sm:flex-row flex gap-6 sm:gap-8 items-center absolute sm:static top-full left-0 w-full sm:w-auto border-b sm:border-none shadow sm:shadow-none py-4 sm:py-0 px-4 sm:px-0 z-40 max-h-0 peer-checked:max-h-96 overflow-hidden sm:max-h-none transition-all duration-300"
            style={{
              background: "var(--ctp-mocha-surface0, #1e1e2e)",
              borderColor: "var(--ctp-mocha-surface2, #585b70)",
              boxShadow: "0 2px 8px 0 var(--ctp-mocha-crust, #11111b)",
            }}
          >
            <a
              href="/"
              className="font-medium font-poppins transition-colors"
              style={{
                color: "var(--ctp-mocha-text, #cdd6f4)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-blue, #89b4fa)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-text, #cdd6f4)")
              }
            >
              Home
            </a>
            <a
              href="/about"
              className="font-medium font-poppins transition-colors"
              style={{
                color: "var(--ctp-mocha-text, #cdd6f4)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-blue, #89b4fa)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-text, #cdd6f4)")
              }
            >
              About
            </a>
            <a
              href="/projects"
              className="font-medium font-poppins transition-colors"
              style={{
                color: "var(--ctp-mocha-text, #cdd6f4)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-blue, #89b4fa)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-text, #cdd6f4)")
              }
            >
              Projects
            </a>
            <a
              href="/contact"
              className="font-medium font-poppins transition-colors"
              style={{
                color: "var(--ctp-mocha-text, #cdd6f4)",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-blue, #89b4fa)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "var(--ctp-mocha-text, #cdd6f4)")
              }
            >
              Contact
            </a>
          </div>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
