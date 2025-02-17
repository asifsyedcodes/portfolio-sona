import { EDUCATION } from "../const";

export const Education = () => {
  return (
    <div className="p-2 lg:p-4 mx-3">
      <p className="font-bold text-xl">EDUCATION</p>
      <div className="mt-3">
        {EDUCATION.map((edu) => (
          <div key={edu.degree} className="my-3">
            <p className="font-semibold">{edu.university}</p>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-sm italic">{`${edu.address}, ${edu.year}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
