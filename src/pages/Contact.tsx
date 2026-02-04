import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

const contacts = [
  {
    id: "email",
    icon: Mail,
    value: "soumyajoshi2000@gmail.com",
    link: "mailto:soumyajoshi2000@gmail.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    value: "linkedin.com/in/soumya-joshi",
    link: "https://www.linkedin.com/in/soumya-joshi-42739121a/",
  },
  {
    id: "instagram",
    icon: Instagram,
    value: "@_soumyajoshii_",
    link: "https://instagram.com/_soumyajoshii_",
  },
  {
    id: "call",
    icon: Phone,
    value: "+91 7976398825",
    link: "tel:+917976398825",
  },
];

const Contact = () => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="contact"
      className="max-w-[1200px] mx-auto w-full
      flex flex-col md:flex-row
      gap-12 md:gap-20
      px-6 md:px-10 py-24 md:py-32"
    >
      {/* Heading */}
      <div className="md:w-1/3">
        <h2 className="text-4xl md:text-6xl font-serif text-[#2f3a44]
          md:sticky md:top-32">
          Contact
        </h2>
      </div>

      {/* Icons */}
      <div className="md:w-2/3 flex justify-start">
        <div className="flex flex-col gap-6">
          {contacts.map((item) => {
            const Icon = item.icon;
            const isOpen = !!openMap[item.id];

            return (
              <div key={item.id} className="flex items-center">
                {/* Icon */}
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full
                  flex items-center justify-center
                  bg-white border shadow-md
                  transition-all duration-300
                  ${isOpen ? "scale-110 border-[#4b4036]" : "hover:scale-105"}`}
                >
                  <Icon className="w-6 h-6 text-[#2f3a44]" />
                </button>

                {/* Slide Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="
                        ml-3
                        max-w-[220px] sm:max-w-[260px]
                        overflow-hidden
                        rounded-full
                        bg-[#2f3a44]
                        text-white
                        px-4 py-3
                        text-sm
                        shadow-lg
                        whitespace-nowrap
                      "
                    >
                      {item.value}
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
