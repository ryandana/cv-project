"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/data/products";

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
