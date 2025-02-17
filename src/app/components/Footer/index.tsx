import { RiPhoneLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

export const Footer = () => {
  return (
    <div className="mt-auto w-full bg-green-300 py-5 flex items-center justify-center gap-6">

      <RiPhoneLine className="h-8 w-8" />
      <RiLinkedinBoxFill className="h-8 w-8" />
      <RiMailLine className="h-8 w-8" />
    </div>
  );
};
