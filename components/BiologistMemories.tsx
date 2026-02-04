"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TurtleGame } from "./TurtleGame";

gsap.registerPlugin(ScrollTrigger);

const memories = [
  {
    src: "/biology/1.jpg",
    alt: "Memory 1",
  },
  {
    src: "/biology/2.jpeg",
    alt: "Memory 2",
  },
  {
    src: "/biology/3.jpg",
    alt: "Memory 3",
  },
  {
    src: "/biology/4.jpg",
    alt: "Memory 4",
  },
  {
    src: "/biology/5.jpg",
    alt: "Memory 5",
  },
  {
    src: "/biology/6.jpg",
    alt: "Memory 6",
  },
  {
    src: "/biology/7.jpg",
    alt: "Memory 7",
  },
];

export const BiologistMemories = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [memoriesRevealed, setMemoriesRevealed] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Bonus
        </h2>

        {!memoriesRevealed ? (
          <div className="mb-8">
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-6">
              Guide the turtle to the sea to reveal memories from my previous life as a biologist.
            </p>
            <TurtleGame onComplete={() => setMemoriesRevealed(true)} />
          </div>
        ) : (
          <div ref={contentRef} className="animate-fadeIn space-y-8">
            <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
              Memories of my previous life as a biologist
            </p>
            
            {/* Photo Carousel - Multi-item scroll */}
            <div className="relative mb-12">
              {/* Carousel Container */}
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4"
                style={{
                  scrollBehavior: 'smooth',
                  scrollSnapType: 'x mandatory',
                }}
              >
                {memories.map((memory, idx) => {
                  const rotations = [-3, 2, -2, 3, -1, 2, -3];
                  const rotation = rotations[idx % rotations.length];

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedPhoto(idx);
                        setIsExpanded(true);
                      }}
                      className="flex-shrink-0 cursor-pointer"
                      style={{ scrollSnapAlign: 'center' }}
                    >
                      <div
                        className="shadow-2xl transform transition-all duration-300 hover:scale-105"
                        style={{
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
                          transform: `rotate(${rotation}deg)`,
                        }}
                      >
                        <Image
                          src={memory.src}
                          alt={memory.alt}
                          width={288}
                          height={320}
                          className="w-72 h-80 object-cover block rounded-lg"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
              >
                ←
              </button>
              <button
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-10"
              >
                →
              </button>
            </div>

            {/* Lightbox Modal */}
            {isExpanded && (
              <div
                className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                onClick={() => setIsExpanded(false)}
              >
                <div
                  className="relative shadow-2xl rounded-lg max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={memories[selectedPhoto].src}
                    alt={memories[selectedPhoto].alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain max-h-[90vh] rounded-lg"
                  />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute -top-10 right-0 text-white text-3xl font-light hover:text-gray-300 transition-colors"
                  >
                    ✕
                  </button>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={() => setSelectedPhoto((selectedPhoto - 1 + memories.length) % memories.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setSelectedPhoto((selectedPhoto + 1) % memories.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
                  >
                    →
                  </button>
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="flex justify-center pt-8 border-t border-gray-800">
              <button
                onClick={() => setMemoriesRevealed(false)}
                className="px-6 py-3 rounded-lg border border-pink-500/50 bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 text-gray-200 font-semibold"
              >
                ← Back to Game
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
