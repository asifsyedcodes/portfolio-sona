import { TECHNICAL_SKILLS } from "../const";

export const TechnicalSkills = () => {
  return (
    <div>
      <p className="font-bold text-xl text-green-700">TECHNICAL SKILLS</p>
      <div className="mt-3">
        {TECHNICAL_SKILLS.map((techSkill) => (
          <div key={techSkill.title} className="my-3 pl-3">
            <p className="font-semibold">{techSkill.title}</p>
            <ul className="pl-5">
              {techSkill.skills.map((skill) => (
                <li key={skill} className="list-disc">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
