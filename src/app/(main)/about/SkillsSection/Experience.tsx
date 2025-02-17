import { EXPERIENCE } from "../const"

export const Experience = () => {
  return (
    <div>
      <p className="font-bold text-xl">EXPERIENCE</p>
      <div className="mt-3">
        {EXPERIENCE.map((exp) => (
          <div key={exp.id} className="my-3">
            <p className="font-semibold">{exp.company}</p>
            <p className="text-sm">{exp.role}</p>
            <p className="text-sm italic">{`${exp.address}, ${exp.duration}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
