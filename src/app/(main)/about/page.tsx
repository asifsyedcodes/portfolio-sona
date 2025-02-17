import { AboutSection } from "./AboutSection";
import { ProcessSection } from "./ProcessSection";
import { SkillsSection } from "./SkillsSection";

export default function About() {
  return (
    <div className="w-full px-5">
      <AboutSection />
      <hr className="my-3" />
      <ProcessSection />
      <hr className="my-3" />
      <SkillsSection />
    </div>
  );
}
