import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Next.js", icon: SiNextdotjs },
];

const Skills = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="w-full min-h-screen flex items-center justify-center bg-[#f0f6fb] overflow-hidden"
    >
      {/* Wrapper */}
      <div className="relative
        w-[320px] h-[320px]
        sm:w-[420px] sm:h-[420px]
        md:w-[550px] md:h-[550px]
        lg:w-[650px] lg:h-[650px]
        flex items-center justify-center"
      >
        {/* Center Circle */}
        <div
          className="absolute rounded-full bg-white shadow-2xl flex items-center justify-center z-30
          w-[120px] h-[120px]
          sm:w-[160px] sm:h-[160px]
          md:w-[200px] md:h-[200px]"
        >
          <h2 className="font-serif tracking-widest text-[#2f3a44]
            text-lg sm:text-xl md:text-2xl">
            SKILLS
          </h2>
        </div>

        {/* Orbit */}
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-full ${
            hovered ? "orbit-paused" : "orbit-rotating"
          }`}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;

            // Responsive radius
            const radius =
              typeof window !== "undefined" && window.innerWidth < 640
                ? 130
                : window.innerWidth < 768
                ? 170
                : window.innerWidth < 1024
                ? 230
                : 300;

            return (
              <div
                key={skill.name}
                className={`absolute transition-all duration-300 ease-out ${
                  hovered && hovered !== skill.name
                    ? "opacity-40 blur-sm"
                    : "opacity-100"
                }`}
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px)`,
                }}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="counter-rotate flex flex-col items-center">
                  <div
                    className={`rounded-full bg-white shadow-xl flex items-center justify-center
                    text-[#5b7fa6] transition-transform duration-300
                    w-10 h-10 text-xl
                    sm:w-12 sm:h-12 sm:text-2xl
                    md:w-14 md:h-14 md:text-3xl
                    ${
                      hovered === skill.name
                        ? "scale-125 z-40"
                        : "scale-100"
                    }`}
                  >
                    <skill.icon />
                  </div>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-[#2f3a44]">
                    {skill.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .orbit-rotating {
          animation: spin 30s linear infinite;
        }

        .orbit-paused {
          animation-play-state: paused;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .counter-rotate {
          animation: spinReverse 30s linear infinite;
        }

        .orbit-paused .counter-rotate {
          animation-play-state: paused;
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
