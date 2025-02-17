import { DESIGN_SKILLS } from "../const";

export const DesignSkills = () => {
  return (
    <div>
      <p className="font-bold text-xl">DESIGN SKILLS</p>
      <div className="mt-3">
        <ul className="pl-5">
          {DESIGN_SKILLS.map((skill) => (
            <li key={skill} className="list-disc">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
