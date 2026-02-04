"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BADGES, type BadgeName } from "@/lib/badges";
import { Tag } from "./Tag";
import { TechnologyBadge } from "./TechnologyBadge";

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: BadgeName;
  badge: string;
}

interface Project {
  id: string;
  name: string;
  emoji: string;
  date: string;
  description: string;
  github: string;
  image?: string;
  tags: string[];
  technologies: Technology[];
}

const projects: Project[] = [
  {
    id: "1",
    name: "wisemutts",
    emoji: "🐕",
    date: "January 2026",
    description:
      "Automated Instagram content creation with AI-generated pixel art videos and philosophical narration. Built with mediaichemy for video generation and instapost for Instagram posting. Daily automation powered by AWS Lambda – zero manual intervention.",
    github: "https://github.com/pedroblayaluz/wisemutts",
    image:
      "https://raw.githubusercontent.com/pedroblayaluz/wisemutts/refs/heads/main/logo.png",
    tags: ["AI", "Instagram"],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "Docker",
        badge: BADGES.Docker,
      },
      {
        name: "AWS Lambda",
        badge: BADGES["AWS Lambda"],
      },
      {
        name: "AWS ECR",
        badge: BADGES["AWS ECR"],
      },
    ],
  },
  {
    id: "2",
    name: "instapost",
    emoji: "📸",
    date: "January 2026",
    description:
      "A simple and powerful Python library for posting to Instagram using the Instagram Graph API. Post images, reels, and carousels with just a few lines of code.",
    github: "https://github.com/pedroblayaluz/instapost",
    image:
      "https://raw.githubusercontent.com/pedroblayaluz/instapost/refs/heads/main/logo.png",
    tags: ["Graph API", "Social Media"],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "Instagram",
        badge: BADGES.Instagram,
      },
      {
        name: "PyPI",
        badge: BADGES.PyPI,
      },
    ],
  },
  {
    id: "3",
    name: "mediaichemy",
    emoji: "🧪",
    date: "December 2025",
    description:
      "A Python library for generating cost effective multimedia content using AI. It intelligently selects models and workflows to minimize costs while delivering high-quality results.",
    github: "https://github.com/pedroblayaluz/mediaichemy",
    image:
      "https://raw.githubusercontent.com/pedroblayaluz/mediaichemy/refs/heads/main/logo.png",
    tags: ["AI"],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "PyPI",
        badge: BADGES.PyPI,
      },
      {
        name: "Pydantic",
        badge: BADGES.Pydantic,
      },
    ],
  },
  {
    id: "4",
    name: "Tytta",
    emoji: "🦉",
    date: "October 2022",
    description:
      "A telegram bot that listens to your voice recordings and transcribes them into spreadsheets or text documents.",
    github: "https://github.com/pedroblayaluz/tyttabot",
    image:
      "https://user-images.githubusercontent.com/68649697/195161899-9efafdaa-d630-4afc-aa25-80fa3b6b538d.png",
    tags: ["Speech-to-Text", "NLP"],
    technologies: [
      {
        name: "Telegram",
        badge: BADGES.Telegram,
      },
      {
        name: "Python",
        badge: BADGES.Python,
      },
    ],
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

      const items = projectsRef.current?.querySelectorAll(".project-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectsRef.current,
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
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Open Source Projects
        </h2>

        <div ref={projectsRef} className="space-y-8">
          {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-item group block p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    {project.image && (
                      <div className="flex-shrink-0">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                          {project.emoji} {project.name}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">
                        <i>{project.date}</i>
                      </p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-4 space-y-3">
                        {/* Tags */}
                        {project.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Tag key={i} name={tag} />
                            ))}
                          </div>
                        )}
                        {/* Technologies */}
                        {project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <TechnologyBadge key={i} name={tech.name} badge={tech.badge} />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
      </div>
    </section>
  );
};
