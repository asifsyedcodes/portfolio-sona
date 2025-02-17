import { DesignSkills } from "./DesignSkills";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { TechnicalSkills } from "./TechnicalSkills";

export const SkillsSection = () => {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Education />
        <Experience />
        <DesignSkills />
        <TechnicalSkills />
      </div>
    </section>
  );
};
