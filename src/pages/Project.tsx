import { useState } from "react";
import { cubicBezier, motion } from "framer-motion";

const projects = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    role: "Frontend Developer – Full-time",
    duration: "July 2022 – Current",
    title: "Assignment Creation Platform",
    description: [
      "Modernised a large-scale education platform’s Assignment Creation system for 300,000+ instructors using micro-frontends (single-spa).",
      "Built a shared style-guide MFE with MUI + Emotion, reducing feature development time by ~20%.",
      "Integrated MFEs with AWS AppSync BFF using Apollo Client, GraphQL, and Zod.",
      "Developed drag-and-drop assessment builders with Zustand, React Hook Form, and i18next.",
      "Automated deployments using GitLab CI/CD and AWS S3 with Jest & RTL testing."
    ]
  },
  {
    id: 2,
    company: "Tata Consultancy Services",
    role: "Frontend Developer – Full-time",
    duration: "July 2022 – Current",
    title: "NFC Card Punching System",
    description: [
      "Implemented NFC-based clock-in / clock-out across supermarket retail stores and Argos LFCs.",
      "Built a badge mapping self-service portal deployed in 150 stores handling 80,000+ punches daily.",
      "Used Azure DevOps pipelines and Microsoft App Center for release management.",
      "Managed application state with Redux, Redux Toolkit, and React Query."
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};

const Project = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#f0f6fb] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2f3a44]">
            Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20"
        >
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onClick={() =>
                  setActiveId(isActive ? null : project.id)
                }
                whileHover={{ scale: 1.03 }}
                className={`relative rounded-2xl
                  p-6 sm:p-8 md:p-10
                  bg-white/70 backdrop-blur-xl border border-white/40
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  transition-all duration-300
                  ${isActive ? "ring-2 ring-[#5b7fa6]" : ""}
                `}
              >
                {/* Header — STACKED ON MOBILE */}
                <div className="mb-5 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#2f3a44]">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {project.company}
                  </p>

                  <p className="text-sm text-gray-500">
                    {project.role}
                  </p>

                  <p className="text-xs text-gray-400">
                    {project.duration}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-5" />

                {/* Description */}
                <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed list-disc pl-5">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
