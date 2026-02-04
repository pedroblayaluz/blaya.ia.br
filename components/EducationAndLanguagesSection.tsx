"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BADGES, type BadgeName } from "@/lib/badges";
import { Tag } from "./Tag";
import { TechnologyBadge } from "./TechnologyBadge";

gsap.registerPlugin(ScrollTrigger);

export const EducationAndLanguagesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

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

      const eduItems = educationRef.current?.querySelectorAll(".edu-item");
      if (eduItems) {
        gsap.fromTo(
          eduItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: educationRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      }

      const langItems = languagesRef.current?.querySelectorAll(".language-item");
      if (langItems) {
        gsap.fromTo(
          langItems,
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out",
            scrollTrigger: {
              trigger: languagesRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const languages = [
    {
      name: "Portuguese",
      level: "Native/Bilingual",
      flag: "🇧🇷",
    },
    {
      name: "English",
      level: "Fluent",
      flag: "🇺🇸",
    },
    {
      name: "Spanish",
      level: "Proficient",
      flag: "🇪🇸",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Education & Languages
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-pink-500/20">
              Education
            </h3>
            <div ref={educationRef} className="space-y-6">
              {/* Master's */}
              <div className="edu-item p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:border-pink-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_UFRGS_formato_SVG-01.svg/330px-Logo_UFRGS_formato_SVG-01.svg.png"
                      alt="UFRGS"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      Master's degree, Ecology
                    </h4>
                    <p className="text-pink-400 font-semibold mb-1 text-sm">
                      Universidade Federal do Rio Grande do Sul
                    </p>
                    <p className="text-gray-400 mb-2 text-sm">2017 – 2019</p>
                    <p className="text-gray-300 font-light mb-3 text-sm">
                      <i>Loggerhead and green turtle population dynamics in the western South Atlantic: insights from stranding patterns</i>
                    </p>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        <Tag name="Data analysis" />
                        <Tag name="Statistical modelling" />
                        <Tag name="Generalized linear models" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <TechnologyBadge name="R" badge={BADGES.R} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bachelor's */}
              <div className="edu-item p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Logo_UFRGS_formato_SVG-01.svg/330px-Logo_UFRGS_formato_SVG-01.svg.png"
                      alt="UFRGS"
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      Bachelor's degree, Biology
                    </h4>
                    <p className="text-cyan-400 font-semibold mb-1 text-sm">
                      Universidade Federal do Rio Grande do Sul
                    </p>
                    <p className="text-gray-400 mb-2 text-sm">2011 – 2015</p>
                    <p className="text-gray-300 font-light text-sm">
                      <i>Análise dos padrões de encalhes de tartarugas marinhas no litoral norte e médio do Rio Grande do Sul entre 1994 e 2015</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Languages Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-purple-500/20">
              Languages
            </h3>
            <div
              ref={languagesRef}
              className="space-y-4"
            >
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="language-item p-6 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10"
                >
                  <div className="text-3xl mb-3">{lang.flag}</div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {lang.name}
                  </h4>
                  <p className="text-cyan-400 font-semibold text-sm">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
