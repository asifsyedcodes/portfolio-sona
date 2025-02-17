import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="flex items-center justify-center px-6 lg:px-20 mt-2 py-5 lg:py-10">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center lg:items-start gap-10 lg:gap-20">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 md:w-80 md:h-80 border-4 border-green-300 rounded-full overflow-hidden">
            <Image
              src="/assets/profile_picture.png"
              alt="Sona Sathar"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center lg:text-left">
            <span className="text-green-700 font-libre">SONA</span>{" "}
            <span className="text-green-900 font-libre">SATHAR</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl font-bold text-gray-800 text-center lg:text-left">
            I am a Learner’s Designer by intention.
          </p>
          <p className="mt-2 text-gray-700">
            The learner is at the heart of my designs, and their needs,
            capabilities, and challenges guide every design decision I make. I
            create{" "}
            <span className="text-green-700 font-semibold">
              Engaging and Meaningful
            </span>{" "}
            learning experiences that help learners transfer their knowledge to
            the real business world.
          </p>

          <p className="mt-4 text-gray-700">
            Over the past five years, I have created interactive,
            scenario-based, and gamified eLearning content grounded in adult
            learning theories, instructional design principles, user experience,
            and psychology. This approach has honed my ability to empathize with
            learners, strategize goal-oriented solutions, personalize complex
            technical content, and visualize meaningful on-screen elements and
            interactions.
          </p>

          <p className="mt-4 text-gray-700">
            I am always eager for opportunities to design learning experiences
            that help both learners and myself grow and be better at what we do.
            Let’s connect if this resonates with you!
          </p>
        </div>
      </div>
    </section>
  );
};
