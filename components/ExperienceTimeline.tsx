"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BADGES, type BadgeName } from "@/lib/badges";
import { TechnologyBadge } from "./TechnologyBadge";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: Array<{
    name: BadgeName;
    badge: string;
  }>;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "AI/ML Solutions Architect",
    company: "CAST",
    period: "08/2024 – Present",
    description:
      "Architect and deploy AI solutions that drive smarter investment decisions for bank customers.",
    highlights: [
      "Design and deploy a multi-method Recommendation System that intelligently matches customers with suitable financial assets",
      "Engineer AI agents in a secure banking environment, balancing compliance with operational efficiency",
    ],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "SQL",
        badge: BADGES.SQL,
      },
      {
        name: "Pandas",
        badge: BADGES.Pandas,
      },
      {
        name: "PySpark",
        badge: BADGES.PySpark,
      },
      {
        name: "Databricks",
        badge: BADGES.Databricks,
      },
      {
        name: "FastAPI",
        badge: BADGES.FastAPI,
      },
      {
        name: "LangChain",
        badge: BADGES.LangChain,
      },
      {
        name: "Docker",
        badge: BADGES.Docker,
      },
      {
        name: "Kubernetes",
        badge: BADGES.Kubernetes,
      },
      {
        name: "OpenShift",
        badge: BADGES.OpenShift,
      },
    ],
  },
  {
    id: "2",
    title: "Senior Data Scientist",
    company: "CAST",
    period: "01/2023 – 08/2024",
    description:
      "Built and deployed ML and NLP solutions to optimize investment management and detect financial risks.",
    highlights: [
      "Developed ML models to detect anomalies in investment funds, reducing operational risks and preventing financial losses",
      "Built NLP solutions to predict customer interests in financial assets, enabling personalized recommendations",
      "Deployed models at scale through APIs and MLOps pipelines",
    ],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "SQL",
        badge: BADGES.SQL,
      },
      {
        name: "Pandas",
        badge: BADGES.Pandas,
      },
      {
        name: "PySpark",
        badge: BADGES.PySpark,
      },
      {
        name: "Databricks",
        badge: BADGES.Databricks,
      },
      {
        name: "spaCy",
        badge: BADGES.spaCy,
      },
      {
        name: "XGBoost",
        badge: BADGES.XGBoost,
      },
      {
        name: "FastAPI",
        badge: BADGES.FastAPI,
      },
      {
        name: "Docker",
        badge: BADGES.Docker,
      },
    ],
  },
  {
    id: "3",
    title: "Data Team Lead",
    company: "TAG - Experiências Literárias",
    period: "03/2022 – 08/2022",
    description: "Build and lead an Analytics Team to support decision making.",
    highlights: [
      "Communicate with business areas to build backlog and prioritize analyses",
      "Conduct Scrum ceremonies and apply the agile methodology to the context of an analytical team",
      "Provide technical support and guide the professional development of data analysts",
      "Unify and standardize all of the company's dashboards",
    ],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "SQL",
        badge: BADGES.SQL,
      },
      {
        name: "Pandas",
        badge: BADGES.Pandas,
      },
      {
        name: "Looker Studio",
        badge: BADGES["Looker Studio"],
      },
      {
        name: "Miro",
        badge: BADGES.Miro,
      },
      {
        name: "Trello",
        badge: BADGES.Trello,
      },
      {
        name: "Jira",
        badge: BADGES.Jira,
      },
      {
        name: "AWS",
        badge: BADGES.AWS,
      },
      {
        name: "Docker",
        badge: BADGES.Docker,
      },
    ],
  },
  {
    id: "4",
    title: "Senior Data Analyst",
    company: "TAG - Experiências Literárias",
    period: "06/2021 – 02/2022",
    description: "Build ETLs connecting all company's data sources.",
    highlights: [
      "Develop and maintain dashboards, serving various business areas",
      "Analyze data to gain insight on consumer behavior",
      "Review and suggest KPIs and metrics",
      "Process automation",
    ],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "SQL",
        badge: BADGES.SQL,
      },
      {
        name: "Pandas",
        badge: BADGES.Pandas,
      },
      {
        name: "R",
        badge: BADGES.R,
      },
      {
        name: "Power BI",
        badge: BADGES["Power BI"],
      },
      {
        name: "Tableau",
        badge: BADGES.Tableau,
      },
      {
        name: "AWS",
        badge: BADGES.AWS,
      },
      {
        name: "Docker",
        badge: BADGES.Docker,
      },
    ],
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "Seazone",
    period: "11/2020 – 05/2021",
    location: "Florianópolis, Santa Catarina, Brazil",
    description:
      "Develop statistical models to predict the revenue of vacation rental properties.",
    highlights: [
      "Build ETLs/data pipelines",
      "Create dashboards displaying revenue per property or geographic unit alongside revenue predictions",
      "Implementation of AWS Lakehouse",
    ],
    technologies: [
      {
        name: "Python",
        badge: BADGES.Python,
      },
      {
        name: "SQL",
        badge: BADGES.SQL,
      },
      {
        name: "Pandas",
        badge: BADGES.Pandas,
      },
      {
        name: "AWS",
        badge: BADGES.AWS,
      },
      {
        name: "Power BI",
        badge: BADGES["Power BI"],
      },
    ],
  },
];

export const ExperienceTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(["1"]));

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

      // Animate timeline items
      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              end: "top 25%",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleExpand = (id: string) => {
    const newExpandedIds = new Set(expandedIds);
    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Experience
        </h2>

        <div ref={timelineRef} className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full group relative"
              >
                {/* Timeline connector line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-16 bg-gradient-to-b from-pink-500/50 to-transparent group-hover:from-pink-500 transition-all duration-300"></div>
                )}

                <div className="flex gap-6 p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 transition-all duration-300 cursor-pointer group">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 ring-4 ring-black group-hover:ring-pink-500/30 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-cyan-400">{exp.period}</span>
                    </div>
                    <p className="text-pink-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center">
                    <svg
                      className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${
                        expandedIds.has(exp.id) ? "rotate-180" : ""
                      }`}
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
              </button>

              {/* Expanded content */}
              {expandedIds.has(exp.id) && (
                <div className="ml-16 mt-4 space-y-4 pb-4 border-l-2 border-purple-500/30 pl-6">
                  {/* Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex gap-2 leading-relaxed"
                        >
                          <span className="text-cyan-500 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <TechnologyBadge key={i} name={tech.name} badge={tech.badge} />
                      ))}
                    </div>
                  </div>

                  {exp.location && (
                    <p className="text-xs text-gray-500 pt-2">{exp.location}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
