"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Snowflake {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const CoverPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [showEmail, setShowEmail] = useState(false);
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate snowflakes only on client side to avoid hydration mismatch
    const generatedSnowflakes: Snowflake[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * -50,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setSnowflakes(generatedSnowflakes);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // Animate title
      timeline.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        0
      );

      // Animate intro phrase
      timeline.fromTo(
        introRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.2
      );

      // Animate subtitle
      timeline.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.4
      );

      // Animate buttons
      timeline.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.6
      );

      // Animate scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5551992018060", "_blank");
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black via-black to-black flex flex-col items-start justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Snow Effect */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0);
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) translateX(50px);
            opacity: 0;
          }
        }
        .snowflake {
          animation: snowfall linear forwards;
          position: fixed;
          width: 4px;
          height: 4px;
          background: #ec4899;
          border-radius: 50%;
          filter: drop-shadow(0 0 4px rgba(236, 72, 153, 0.4));
          pointer-events: none;
        }
        .mountains-bg {
          position: fixed;
          bottom: -40px;
          left: 0;
          right: 0;
          width: 100%;
          object-fit: cover;
          pointer-events: none;
          z-index: 0;
        }
        @media (min-width: 768px) {
          .mountains-bg {
            bottom: -120px;
          }
        }
      `}</style>
      
      {/* Snowflakes container */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {snowflakes.map((snowflake) => (
          <div
            key={snowflake.id}
            className="snowflake"
            style={{
              left: `${snowflake.left}%`,
              top: `${snowflake.top}%`,
              animationDuration: `${snowflake.duration}s`,
              animationDelay: `${snowflake.delay}s`,
              opacity: snowflake.opacity,
            }}
          />
        ))}
      </div>

      {/* Mountains decoration at the bottom - Fixed background */}
      <img
        src="/mountains.png"
        alt="Mountains"
        className="mountains-bg"
      />
      
      {/* Background gradient elements */}      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-5xl mx-auto w-full">        <h1
          ref={titleRef}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent text-left"
        >
          Pedro Blaya Luz
        </h1>

        <p
          ref={introRef}
          className="text-lg md:text-xl text-gray-300 mb-12 font-light text-left leading-relaxed max-w-3xl"
        >
          Former biologist, found my vocation in data and AI. I've built end-to-end data solutions across multiple industries: dashboards and analysis, data pipelines, predictive models, and agentic AI.
        </p>

        <div ref={subtitleRef} className="mb-12 text-left">
          <p className="text-xl md:text-2xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold mb-2">
            AI/ML Solutions Architect
          </p>
          <p className="text-base md:text-lg text-gray-400 font-light">
            Data Scientist • Data Analyst • Software Engineer
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-wrap gap-4 items-center">
          {/* Email Button */}
          <button
            onClick={handleEmailClick}
            className="group relative px-6 py-3 rounded-lg border border-pink-500/50 bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:border-pink-500 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-200 font-semibold">
              {showEmail ? "blaya.luz@gmail.com" : "Email"}
            </span>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="group relative px-6 py-3 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 text-cyan-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.95 1.414-.366.194-.753.489-.919 1.023-.172.537-.107 1.292.39 1.916.195.255 1.51 1.85 3.672 3.35 2.163 1.5 3.978 1.768 4.7 1.91.694.138 1.27.094 1.71-.055.438-.149 1.341-.547 1.532-1.076.19-.528.19-1.096.132-1.213-.058-.117-.203-.195-.422-.34-1.04-.684-3.075-1.512-4.38-1.888-.697-.226-1.29-.294-1.806-.17-.516.124-1.028.382-1.516.839z" />
            </svg>
            <span className="text-gray-200 font-semibold">WhatsApp</span>
          </button>

          {/* GitHub Button */}
          <a
            href="https://github.com/pedroblayaluz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-lg border border-gray-500/30 bg-gradient-to-r from-gray-500/5 to-gray-500/5 hover:border-gray-400 hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-gray-500/10 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-gray-300 font-semibold">GitHub</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/pedroblayaluz"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 rounded-lg border border-blue-500/30 bg-gradient-to-r from-blue-500/5 to-blue-500/5 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-blue-500/10 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
          >
            <svg
              className="w-5 h-5 text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="text-blue-300 font-semibold">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-gradient-to-b from-pink-500 to-purple-500 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};
