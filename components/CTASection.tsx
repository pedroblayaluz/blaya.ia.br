"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showEmail, setShowEmail] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEmailClick = () => {
    setShowEmail(!showEmail);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5551992018060", "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 relative overflow-hidden flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Reach out
          </h2>

          <p className="text-gray-300 text-xl font-light">
            Happy to talk about projects, collaborations, or anything in between.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Email Button */}
            <button
              type="button"
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
              type="button"
              onClick={handleWhatsApp}
              className="group relative px-6 py-3 rounded-lg border border-cyan-500/50 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:border-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 flex items-center gap-2 flex-shrink-0 cursor-pointer"
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

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/pedroblayaluz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 rounded-lg border border-purple-500/50 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
            >
              <svg
                className="w-5 h-5 text-purple-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-1.044 0-1.68.703-1.954 1.382-.1.242-.127.578-.127.916v5.508h-3.554s.048-8.934 0-9.852h3.554v1.394c.435-.671 1.213-1.627 2.948-1.627 2.154 0 3.77 1.408 3.77 4.434v5.651zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.707 0-.955.771-1.708 1.956-1.708 1.184 0 1.914.753 1.938 1.708 0 .95-.754 1.707-1.938 1.707zm1.581 11.597H3.756V8.6h3.162v11.852zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-gray-200 font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
