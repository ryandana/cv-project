// app/blog/[slug]/BlogDetailContainer.tsx
"use client";

import { motion } from "motion/react";
import { useEffect, ReactNode } from "react";

interface BlogDetailContainerProps {
  children: ReactNode;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.6
};

export function BlogDetailContainer({ children }: BlogDetailContainerProps) {
  useEffect(() => {
    // Animate elements after component mounts
    const title = document.querySelector('.blog-title');
    const date = document.querySelector('.blog-date');
    const image = document.querySelector('.blog-image');
    const content = document.querySelector('.blog-content');

    // Animate title
    if (title) {
      const motionTitle = title as HTMLElement;
      Object.assign(motionTitle.style, {
        opacity: '0',
        transform: 'translateY(-30px) scale(0.95)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      });
      
      setTimeout(() => {
        Object.assign(motionTitle.style, {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
        });
      }, 200);
    }

    // Animate date
    if (date) {
      const motionDate = date as HTMLElement;
      Object.assign(motionDate.style, {
        opacity: '0',
        transform: 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      });
      
      setTimeout(() => {
        Object.assign(motionDate.style, {
          opacity: '1',
          transform: 'translateY(0)',
        });
      }, 400);
    }

    // Animate image with parallax-like effect
    if (image) {
      const motionImage = image as HTMLElement;
      Object.assign(motionImage.style, {
        opacity: '0',
        transform: 'translateY(40px) scale(1.05)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      });
      
      setTimeout(() => {
        Object.assign(motionImage.style, {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
        });
      }, 600);

      // Add subtle hover effect to image
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      if (!isTouch) {
        motionImage.addEventListener('mouseenter', () => {
          motionImage.style.transform = 'translateY(-5px) scale(1.02)';
          motionImage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        motionImage.addEventListener('mouseleave', () => {
          motionImage.style.transform = 'translateY(0) scale(1)';
          motionImage.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
      }
    }

    // Animate content with staggered paragraph animation
    if (content) {
      const motionContent = content as HTMLElement;
      Object.assign(motionContent.style, {
        opacity: '0',
        transform: 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      });
      
      setTimeout(() => {
        Object.assign(motionContent.style, {
          opacity: '1',
          transform: 'translateY(0)',
        });

        // Animate individual paragraphs within content
        const paragraphs = content.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote');
        paragraphs.forEach((paragraph, index) => {
          const motionParagraph = paragraph as HTMLElement;
          Object.assign(motionParagraph.style, {
            opacity: '0',
            transform: 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          });

          setTimeout(() => {
            Object.assign(motionParagraph.style, {
              opacity: '1',
              transform: 'translateY(0)',
            });
          }, index * 150);
        });

      }, 800);
    }

    // Add scroll reveal effect for content
    const observeElements = () => {
      const elements = document.querySelectorAll('.blog-content p, .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6, .blog-content ul, .blog-content ol, .blog-content blockquote');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
              observer.unobserve(element);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      // Reset and observe elements that might be out of view
      setTimeout(() => {
        elements.forEach((element, index) => {
          if (index > 3) { // Only apply scroll reveal to elements after the first few
            const motionElement = element as HTMLElement;
            Object.assign(motionElement.style, {
              opacity: '0',
              transform: 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            });
            observer.observe(element);
          }
        });
      }, 1500);
    };

    // Setup scroll reveal after initial animations
    setTimeout(observeElements, 2000);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}