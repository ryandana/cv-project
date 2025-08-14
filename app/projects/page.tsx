"use client";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Web Nikah",
    link: "https://web-nikah-green.vercel.app",
    thumbnail: "/img/webnikah.png",
  },
  {
    title: "Luxe",
    link: "https://luxury-brands-three.vercel.app/",
    thumbnail: "/img/luxe.png",
  },
  {
    title: "Luminaria",
    link: "https://luminaria-3cebi3wzt-ryandanaputras-projects.vercel.app",
    thumbnail: "/img/luminaria.png",
  },

  {
    title: "Fundee",
    link: "https://lombalayananmasyarakat.vercel.app",
    thumbnail: "/img/fundee.png",
  },
  {
    title: "Birtday",
    link: "#",
    thumbnail: "/img/birtday.png",
  },

  {
    title: "Zendo",
    link: "https://github.com/ryandana/zendo",
    thumbnail: "img/zendo.png",
  },
  {
    title: "Pixel Refined",
    link: "https://github.com/ryandana/refined-pixel",
    thumbnail: "/img/refined-pixel.png",
  },

  {
    title: "Background Remover",
    link: "https://github.com/ryandana/bg-remover",
    thumbnail: "/img/bg-remover.png",
  },
  {
    title: "Naturia",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/img/naturia.png",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        <HeroParallax products={products} />
      </div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
