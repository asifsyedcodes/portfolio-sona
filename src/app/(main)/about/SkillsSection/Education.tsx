import { EDUCATION } from "../const";

export const Education = () => {
  return (
    <div>
      <p className="font-bold text-xl text-green-700">EDUCATION</p>
      <div className="mt-3">
        {EDUCATION.map((edu) => (
          <div key={edu.degree} className="my-3">
            <p className="font-semibold">{edu.university}</p>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-xs italic text-grey-700">{`${edu.address}, ${edu.year}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
