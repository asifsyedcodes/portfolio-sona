import Image from "next/image";

export const ProcessSection = () => {
  return (
    <section className="p-4">
      <p className="text-2xl">
        My Definition for{" "}
        <span className="text-green-700">Engaging and Meaningful Learning</span>
      </p>
      <p className="mt-4">
        {/* TODO -> Change text */}
        Over the past five years, I have created interactive, scenario-based,
        and gamified eLearning content grounded in adult learning theories,
        instructional design principles, user experience, and psychology. This
        approach has honed my ability to empathize with learners, strategize
        goal-oriented solutions, personalize complex technical content, and
        visualize meaningful on-screen elements and interactions.
      </p>
      <p className="text-2xl mt-6">
        My Process for{" "}
        <span className="text-green-700">Designing Learning</span>
      </p>
      <div className="flex items-center justify-center w-full">
        <Image
          alt="Design Learning"
          width={800}
          height={400}
          src="/assets/design_learning.webp"
        />
      </div>
    </section>
  );
};
