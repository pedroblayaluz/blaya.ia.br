"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const BioSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in heading
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

      // Fade in bio text
      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bioRef.current,
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
      className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="flex-shrink-0 space-y-4">
            <div className="w-80 h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/me.jpg"
                alt="Pedro Luz"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="text-left space-y-3">
              <p className="text-2xl font-bold text-gray-100">Pedro Luz</p>
              <p className="text-lg font-semibold text-gray-300">AI/ML Solutions Architect at <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.cast4it.com/&ved=2ahUKEwig7pnI3cCSAxX9I7kGHf5xNSAQFnoECBsQAQ&usg=AOvVaw0bKIu1nJ8z2CuqGEqp1GK7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">CAST</a></p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-400">Working with</p>
              <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.bb.com.br/&ved=2ahUKEwiw65TT3cCSAxUAJLkGHa0XIDwQFnoECAwQAQ&usg=AOvVaw2-lD8aCFpa0kcKzTx5msKX" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgxFPQzvZZFbdxEW72cFCriggCsAvqDkTrQ&s"
                  alt="Banco do Brasil"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          <div ref={bioRef} className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed font-light">
            I started my career in data while working as a biologist. During my Master's in Ecology, I discovered my passion for statistics and programming analyzing sea turtle data. In 2020, I decided to dive fully into technology, and since then I've built a strong track record in data, AI, and software, leading end-to-end projects across companies in different industries.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed font-light">
            My first tech role was in a real estate tech company, building ETLs, predictive models, and dashboards. Afterwards, in a subscription-based book company, I took on a hybrid role as tech lead and data product manager—while still coding. Today, in the financial sector, I work as an AI/ML solutions architect applying NLP techniques and building machine learning models to power a financial products recommendation system as well as deploying AI agents in the strict and secure environment of banking.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed font-light">
            My passion for staying current with state-of-the-art techniques means my clients get solutions built with the latest and most effective approaches. I'm always interested in understanding business challenges and building solutions that create real impact.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};
