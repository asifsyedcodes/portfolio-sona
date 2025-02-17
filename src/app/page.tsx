import { ButtonLink } from "./components/ButtonLink";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center bg-gradient-to-r from-white-900 via-green-300 to-green-700">
      <div className="flex-grow flex flex-col items-center justify-center px-5">
        <h1 className="text-4xl md:text-7xl max-w-full font-semibold overflow-hidden whitespace-nowrap animate-typing-fast">
          <span className="text-green-900 font-libre">SONA</span>{" "}
          <span className="font-libre">SATHAR</span>
        </h1>
        <div className="mt-2 md:mt-4 group">
          <p className="text-xl md:text-3xl text-black-900  overflow-hidden whitespace-nowrap animate-typing-fast">
            Learning Designer &bull; Instructional Designer
          </p>
        </div>
        <p className="text-lg md:text-2xl  text-black-900 mt-2">
          <span className="text-green-700 font-extrabold">
            Engaging, Meaningful
          </span>{" "}
          Workplace Learning
        </p>
        <p className="mt-1 text-base md:text-lg max-w-2xl">
          grounded in adult learning principles, user experience, and learning
          science.
        </p>
        <div className="mt-10 flex gap-8">
          <ButtonLink id="about" name="about" href="/about" variant="outline">
            About
          </ButtonLink>
          <ButtonLink
            id="portfolio"
            name="portfolio"
            href="/portfolio"
            variant="primary"
          >
            Portfolio
          </ButtonLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
