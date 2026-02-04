"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  badge: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        badge:
          "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white",
      },
      {
        name: "R",
        badge:
          "https://img.shields.io/badge/R-276DC3?style=flat-square&logo=r&logoColor=white",
      },
      {
        name: "SQL",
        badge:
          "https://img.shields.io/badge/SQL-336791?style=flat-square&logo=postgresql&logoColor=white",
      },
    ],
  },
  {
    title: "Dashboard & Visualization",
    skills: [
      {
        name: "Power BI",
        badge:
          "https://custom-icon-badges.demolab.com/badge/Power%20BI-F1C912?logo=power-bi&logoColor=fff&style=flat-square",
      },
      {
        name: "Looker Studio",
        badge:
          "https://img.shields.io/badge/Looker%20Studio-4285F4?logo=looker&logoColor=white&style=flat-square",
      },
      {
        name: "Tableau",
        badge:
          "https://custom-icon-badges.demolab.com/badge/Tableau-0176D3?logo=tableau&logoColor=fff&style=flat-square",
      },
    ],
  },
  {
    title: "Data & AI/ML Libraries",
    skills: [
      {
        name: "PySpark",
        badge:
          "https://img.shields.io/badge/PySpark-E25A1C?style=flat-square&logo=apachespark&logoColor=white",
      },
      {
        name: "spaCy",
        badge:
          "https://custom-icon-badges.demolab.com/badge/spaCy-09A3D5?logo=spacy&logoColor=white&style=flat-square",
      },
      {
        name: "XGBoost",
        badge:
          "https://custom-icon-badges.demolab.com/badge/XGBoost-003366?logo=xgboost&logoColor=white&style=flat-square",
      },
      {
        name: "Pandas",
        badge:
          "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white",
      },
      {
        name: "NumPy",
        badge:
          "https://img.shields.io/badge/NumPy-4DABCF?style=flat-square&logo=numpy&logoColor=white",
      },
      {
        name: "Scikit-learn",
        badge:
          "https://img.shields.io/badge/Scikit--learn-%23F7931E?style=flat-square&logo=scikit-learn&logoColor=white",
      },
      {
        name: "PyTorch",
        badge:
          "https://img.shields.io/badge/PyTorch-ee4c2c?style=flat-square&logo=pytorch&logoColor=white",
      },
      {
        name: "TensorFlow",
        badge:
          "https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white",
      },
      {
        name: "LangChain",
        badge:
          "https://img.shields.io/badge/LangChain-1c3c3c?style=flat-square&logo=langchain&logoColor=white",
      },
    ],
  },
  {
    title: "Python Development",
    skills: [
      {
        name: "FastAPI",
        badge:
          "https://img.shields.io/badge/FastAPI-009485?style=flat-square&logo=fastapi&logoColor=white",
      },
      {
        name: "Jupyter",
        badge:
          "https://img.shields.io/badge/Jupyter-F37726?style=flat-square&logo=jupyter&logoColor=white",
      },
      {
        name: "Pydantic",
        badge:
          "https://img.shields.io/badge/Pydantic-E92063?style=flat-square&logo=Pydantic&logoColor=white",
      },
      {
        name: "Pytest",
        badge:
          "https://img.shields.io/badge/Pytest-fff?style=flat-square&logo=pytest&logoColor=000",
      },
      {
        name: "PyPI",
        badge:
          "https://img.shields.io/badge/PyPI-3775A9?style=flat-square&logo=pypi&logoColor=white",
      },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      {
        name: "AWS",
        badge:
          "https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white&style=flat-square",
      },
      {
        name: "Databricks",
        badge:
          "https://img.shields.io/badge/Databricks-FF3621?style=flat-square&logo=databricks&logoColor=white",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      {
        name: "Git",
        badge:
          "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white",
      },
      {
        name: "GitHub Actions",
        badge:
          "https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white",
      },
      {
        name: "Docker",
        badge:
          "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
      },
      {
        name: "Kubernetes",
        badge:
          "https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white",
      },
      {
        name: "OpenShift",
        badge:
          "https://img.shields.io/badge/OpenShift-EE0000?style=flat-square&logo=redhat&logoColor=white",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        badge:
          "https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white",
      },
      {
        name: "MongoDB",
        badge:
          "https://img.shields.io/badge/MongoDB-4ea94b?style=flat-square&logo=mongodb&logoColor=white",
      },
      {
        name: "Oracle",
        badge:
          "https://custom-icon-badges.demolab.com/badge/Oracle-F80000?logo=oracle&logoColor=white&style=flat-square",
      },
      {
        name: "SQLite",
        badge:
          "https://img.shields.io/badge/SQLite-%2307405e?style=flat-square&logo=sqlite&logoColor=white",
      },
      {
        name: "Firebase",
        badge:
          "https://img.shields.io/badge/Firebase-039BE5?style=flat-square&logo=firebase&logoColor=white",
      },
    ],
  },
];

export const ToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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

      const categories = categoriesRef.current?.querySelectorAll(
        ".tool-category"
      );
      if (categories) {
        gsap.fromTo(
          categories,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
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
      className="min-h-auto bg-black py-20 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Tools & Technologies
        </h2>
        <p className="text-gray-300 text-lg font-light mb-12 w-full">
          Here's a snapshot of some tools I work with day to day. But let's be clear: tools are interchangeable.
          <br /><br />
          The real foundation is understanding how systems are conceived, built, and stressed in the real world. How ideas turn into architectures, and how those architectures evolve over time.
          <br /><br />
          Frameworks and libraries get replaced. Principles endure.
          If you understand the fundamentals, picking up new tools is just an implementation detail.
        </p>

        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="tool-category p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5 hover:border-pink-500/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10">
              <h3 className="text-lg font-bold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <img
                    key={skillIdx}
                    src={skill.badge}
                    alt={skill.name}
                    className="rounded-md opacity-75 hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
