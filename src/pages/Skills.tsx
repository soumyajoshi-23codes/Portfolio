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
      className="w-full h-screen flex items-center justify-center bg-[#f0f6fb] relative overflow-hidden"
    >
      {/* Wrapper (static) */}
      <div className="relative w-[650px] h-[650px] flex items-center justify-center">

        {/* Center static circle (NEVER ROTATES) */}
        <div className="absolute w-[220px] h-[220px] rounded-full bg-white shadow-2xl flex items-center justify-center z-30">
          <h2 className="text-3xl font-serif tracking-widest text-[#2f3a44]">
            SKILLS
          </h2>
        </div>

        {/* Rotating orbit layer ONLY for icons */}
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-full ${
            hovered ? "orbit-paused" : "orbit-rotating"
          }`}
        >
          {skills.map((skill, index) => {
            const angle = (360 / skills.length) * index;
            const radius = 300;

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
                  className={`w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl text-[#5b7fa6] transition-transform duration-300 ${
                    hovered === skill.name ? "scale-125 z-40" : "scale-100"
                  }`}
                >
                  <skill.icon />
                </div>

                <p className="mt-2 text-center text-sm font-medium text-[#2f3a44]">
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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .counter-rotate {
          animation: spinReverse 30s linear infinite;
        }

        .orbit-paused .counter-rotate {
          animation-play-state: paused;
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
