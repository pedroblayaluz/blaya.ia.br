"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LanguageTranslations {
  pt: string;
  en: string;
  es: string;
}

interface Language {
  name: string;
  level: string;
  flag: string;
  defaultLang: "pt" | "en" | "es";
  translations: LanguageTranslations;
}

export const LanguagesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<{
    [key: number]: "pt" | "en" | "es";
  }>({
    0: "pt",
    1: "en",
    2: "es",
  });

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

      const items = languagesRef.current?.querySelectorAll(".language-item");
      if (items) {
        gsap.fromTo(
          items,
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

  const languages: Language[] = [
    {
      name: "Portuguese",
      level: "Native/Bilingual",
      flag: "🇧🇷",
      defaultLang: "pt",
      translations: {
        pt: "Brasileiro nascido e criado. Viajei o país todo e virei sommelier de sotaques: sou apaixonado pelas mil maneiras diferentes de falar português.",
        en: "Brazilian born and raised. I travelled the entire country and became a sommelier of accents: I'm passionate about the thousand different ways to speak Portuguese.",
        es: "Brasileño nacido y criado. Viajé por todo el país y me convertí en sommelier de acentos: soy apasionado por las mil formas diferentes de hablar portugués.",
      },
    },
    {
      name: "English",
      level: "Fluent",
      flag: "🇺🇸",
      defaultLang: "en",
      translations: {
        pt: "English não é algo que aprendi. É algo com que cresci. Vinte e poucos anos de estudo, trabalho e amizades fizeram com que parecesse menos uma segunda língua e mais como uma segunda casa.",
        en: "English isn't something I learned. It's something I grew up with. Over twenty years of studying, working, and building friendships made it feel less like a second language and more like a second home.",
        es: "English no es algo que haya aprendido. Es algo con lo que crecí. Más de veinte años de estudio, trabajo y amistades lo hicieron sentir menos como un segundo idioma y más como un segundo hogar.",
      },
    },
    {
      name: "Spanish",
      level: "Proficient",
      flag: "🇪🇸",
      defaultLang: "es",
      translations: {
        pt: "América Latina é parte do meu caminho. Uruguai e Argentina, em especial, já não se sentem como viagens: no Uruguai tenho família muito próxima e compartilho o mate, a cultura e o coração cisplatino com meus hermanos latinoamericanos.",
        en: "Latin America has been part of my journey. Uruguay and Argentina, especially, no longer feel like trips: in Uruguay I have very close family and I share mate, culture, and the Cisplatine heart with my Latin American brothers.",
        es: "América Latina ha sido parte de mi camino. Uruguay y Argentina, en especial, ya no se sienten como viajes: en Uruguay tengo familia muy cercana y comparto el mate, la cultura y el corazón cisplatino con mis hermanos latinoamericanos.",
      },
    },
  ];

  const cycleLang = (index: number) => {
    const langs: ("pt" | "en" | "es")[] = ["pt", "en", "es"];
    const currentLang = selectedLanguages[index];
    const currentIndex = langs.indexOf(currentLang);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    setSelectedLanguages({
      ...selectedLanguages,
      [index]: nextLang,
    });
  };

  const getLangLabel = (lang: "pt" | "en" | "es") => {
    const labels = { pt: "PT", en: "EN", es: "ES" };
    return labels[lang];
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Languages
        </h2>

        <div
          ref={languagesRef}
          className="space-y-6"
        >
          {languages.map((lang, index) => (
            <div
              key={index}
              className="language-item p-8 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 hover:border-purple-500/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-cyan-500/10"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">{lang.flag}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {lang.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold text-sm">{lang.level}</p>
                    </div>
                    <button
                      onClick={() => cycleLang(index)}
                      className="px-3 py-1 rounded text-xs font-semibold border border-purple-500/50 text-purple-400 hover:text-purple-300 hover:border-purple-400 transition-all duration-300"
                    >
                      {getLangLabel(selectedLanguages[index])}
                    </button>
                  </div>
                  <p className="text-gray-300 font-light text-base leading-relaxed">
                    {lang.translations[selectedLanguages[index]]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
