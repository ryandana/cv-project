// app/blog/BlogContainer.tsx
"use client";

import { motion } from "motion/react";
import { useEffect, ReactNode } from "react";

interface BlogContainerProps {
  children: ReactNode;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      bounce: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
    rotateX: -10,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
      type: "spring",
      bounce: 0.2,
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function BlogContainer({ children }: BlogContainerProps) {
  useEffect(() => {
    // Add motion to blog post items after component mounts
    const blogItems = document.querySelectorAll('.blog-post-item');
    const titles = document.querySelectorAll('h1');
    const images = document.querySelectorAll('.blog-post-image');
    const postTitles = document.querySelectorAll('.blog-post-title');
    const excerpts = document.querySelectorAll('.blog-post-excerpt');

    // Animate main title
    titles.forEach((title) => {
      if (title.textContent?.includes('Blog Post')) {
        const motionTitle = title as any;
        Object.assign(motionTitle.style, {
          opacity: '0',
          transform: 'translateY(-30px) scale(0.9)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        });
        
        setTimeout(() => {
          Object.assign(motionTitle.style, {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          });
        }, 100);
      }
    });

    // Animate blog items
    blogItems.forEach((item, index) => {
      const motionItem = item as HTMLElement;
      Object.assign(motionItem.style, {
        opacity: '0',
        transform: 'translateY(40px) scale(0.9) rotateX(-10deg)',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      });

      setTimeout(() => {
        Object.assign(motionItem.style, {
          opacity: '1',
          transform: 'translateY(0) scale(1) rotateX(0deg)',
        });

        // Add hover animations (only for non-touch devices)
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        
        if (!isTouch) {
          motionItem.addEventListener('mouseenter', () => {
            motionItem.style.transform = 'translateY(-8px) scale(1.02)';
            motionItem.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          });

          motionItem.addEventListener('mouseleave', () => {
            motionItem.style.transform = 'translateY(0) scale(1)';
            motionItem.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
          });
        } else {
          // For touch devices, add a subtle tap animation
          motionItem.addEventListener('touchstart', () => {
            motionItem.style.transform = 'translateY(0) scale(0.98)';
            motionItem.style.transition = 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)';
          });

          motionItem.addEventListener('touchend', () => {
            motionItem.style.transform = 'translateY(0) scale(1)';
            motionItem.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
          });
        }

      }, 150 + index * 80);
    });

    // Animate images with a slight delay
    images.forEach((img, index) => {
      const motionImg = img as HTMLElement;
      Object.assign(motionImg.style, {
        opacity: '0',
        transform: 'scale(1.1)',
        transition: 'all 0.3s ease-out',
      });

      setTimeout(() => {
        Object.assign(motionImg.style, {
          opacity: '1',
          transform: 'scale(1)',
        });
      }, 300 + index * 80);
    });

    // Animate text elements
    postTitles.forEach((title, index) => {
      const motionTitle = title as HTMLElement;
      Object.assign(motionTitle.style, {
        opacity: '0',
        transform: 'translateY(10px)',
        transition: 'all 0.3s ease-out',
      });

      setTimeout(() => {
        Object.assign(motionTitle.style, {
          opacity: '1',
          transform: 'translateY(0)',
        });
      }, 400 + index * 80);
    });

    excerpts.forEach((excerpt, index) => {
      const motionExcerpt = excerpt as HTMLElement;
      Object.assign(motionExcerpt.style, {
        opacity: '0',
        transform: 'translateY(10px)',
        transition: 'all 0.3s ease-out',
      });

      setTimeout(() => {
        Object.assign(motionExcerpt.style, {
          opacity: '1',
          transform: 'translateY(0)',
        });
      }, 450 + index * 80);
    });

  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}