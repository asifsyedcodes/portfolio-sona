import { ButtonLink } from "./components/ButtonLink";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-center bg-gradient-to-r from-white-900 via-green-300 to-green-700">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-gray-800">
          <span className="text-green-900 font-libre">SONA</span>{" "}
          <span className="font-libre">SATHAR</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700 mt-4">
          Learning Designer &bull; Instructional Designer
        </p>
        <p className="text-xl md:text-2xl  text-gray-800 mt-2">
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
