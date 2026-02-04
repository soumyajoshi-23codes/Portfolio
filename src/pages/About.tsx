import HighlightLine from "../components/HightlightLine";

const aboutLines = [
  "I’m a frontend engineer with a specialty in web accessibility, focused on building pixel-perfect, intuitive user interfaces.",
  "I enjoy working at the intersection of design and engineering, where great user experience meets robust, clean, and scalable code.",
  "Currently, I'm a frontend engineer at TCS, where I work on the component library team to help maintain and evolve our design system.",
  "In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture.",
];

const About = () => {
  return (
    <section
      id="about"
      className=" w-full  bg-[#f0f6fb]  flex items-center justify-center px-6 lg:px-20 py-32"
    >
      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Title */}
        <div className="flex items-start justify-center">
          <h2 className="text-[64px] font-serif text-[#2f3a44] sticky top-[120px]">
            About
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-10">
          {aboutLines.map((line, index) => (
            <HighlightLine key={index} text={line} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
