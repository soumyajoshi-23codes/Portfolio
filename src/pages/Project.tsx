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
      "Modernised a large-scale education platform’s Assignment Creation system for 300,000+ instructors by migrating legacy systems to a micro-frontend architecture using single-spa.",
      "Built a shared style-guide MFE with MUI + Emotion, reducing feature development time by ~20%.",
      "Integrated MFEs with AWS AppSync BFF using Apollo Client + GraphQL and Zod for type safety.",
      "Developed drag-and-drop assessment builders with Zustand and React Hook Form and added localisation with i18next.",
      "Automated deployments using GitLab CI/CD, AWS S3 hosting, and ensured quality with Jest and RTL."
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
      "Built a self-service badge mapping portal deployed in 150 stores handling 80,000+ punches daily.",
      "Used Azure DevOps pipelines and Microsoft App Center for build, release, and distribution.",
      "Managed application state with Redux, Redux Toolkit, and React Query for smooth UX."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1) },
  },
};

const Project = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#f0f6fb] py-40">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mb-24"
        >
          <h2 className="text-6xl font-serif text-[#2f3a44] tracking-wide">
            Projects
          </h2>
        </motion.div>

        {/* Projects Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-20"
        >
          {projects.map((project) => {
            const isActive = hovered === project.id;
            const isDimmed = hovered && hovered !== project.id;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-2xl p-10 cursor-pointer transition-all duration-300
                  bg-white/70 backdrop-blur-xl border border-white/40
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  ${isActive ? "ring-2 ring-[#5b7fa6] shadow-2xl" : ""}
                  ${isDimmed ? "opacity-40 blur-[1px] scale-[0.98]" : ""}
                `}
              >
                {/* Soft gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6eef6] via-transparent to-[#d9e6f2] opacity-40 pointer-events-none" />

                {/* Header */}
                <div className="relative flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#2f3a44] leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {project.company} • {project.role}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 whitespace-nowrap">
                    {project.duration}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6" />

                {/* Description */}
                <ul className="relative space-y-4 text-gray-600 leading-relaxed list-disc pl-5">
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
