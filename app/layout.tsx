import { Poppins } from "next/font/google";
import React from "react";
import { ClientDock } from "@/components/ui/client-dock";
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
import "./globals.css";

export const metadata = {
  title: "Ryan Dana | Portfolio",
  description:
    "Personal portfolio website for Ryan Dana, showcasing projects, contact info, and more.",
  openGraph: {
    title: "Ryan Dana | Portfolio",
    description:
      "Personal portfolio website for Ryan Dana, showcasing projects, contact info, and more.",
    url: "https://ryandana.dev",
    siteName: "Ryan Dana Portfolio",
    images: [
      {
        url: "/img/pfp.jpg",
        width: 800,
        height: 600,
        alt: "Ryan Dana Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Dana | Portfolio",
    description:
      "Personal portfolio website for Ryan Dana, showcasing projects, contact info, and more.",
    images: ["/img/pfp.jpg"],
  },
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
        style={{
          background: "var(--ctp-mocha-base, #1e1e2e)",
          color: "var(--ctp-mocha-text, #cdd6f4)",
        }}
      >
        <div className="relative min-h-screen w-full">
          {children}
          <ClientDock />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
