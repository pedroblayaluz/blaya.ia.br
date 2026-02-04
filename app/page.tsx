import {
  CoverPage,
  BioSection,
  ProjectsSection,
  ExperienceTimeline,
  EducationSection,
  LanguagesSection,
  ToolsSection,
  Footer,
} from "@/components";
import { BiologistMemories } from "@/components/BiologistMemories";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="w-full text-white">
      <CoverPage />
      <BioSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <EducationSection />
      <LanguagesSection />
      <ToolsSection />
      <BiologistMemories />
      <CTASection />
      <Footer />
    </main>
  );
}
