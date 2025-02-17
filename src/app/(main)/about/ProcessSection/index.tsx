import Image from "next/image";

export const ProcessSection = () => {
  return (
    <section className="p-4">
      <p className="text-2xl">
        My Definition for{" "}
        <span className="text-green-700">Engaging and Meaningful Learning</span>
      </p>
      <p className="mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
