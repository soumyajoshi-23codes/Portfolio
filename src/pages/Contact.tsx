import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

const contacts = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "soumyajoshi2000@gmail.com",
    link: "mailto:soumyajoshi2000@gmail.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/soumya-joshi-42739121a/",
    link: "https://www.linkedin.com/in/soumya-joshi-42739121a/",
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@_soumyajoshii_",
    link: "https://instagram.com/_soumyajoshii_",
  },
  {
    id: "call",
    icon: Phone,
    label: "Call",
    value: "+91  7976398825",
    link: "tel:+917976398825",
  },
];

const Contact = () => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full flex gap-20 px-10 py-32">

      {/* Left Heading */}
      <div className="w-1/3">
        <h2 className="text-6xl font-serif text-[#2f3a44] sticky top-32">
          Contact
        </h2>
      </div>

      {/* Right Vertical Icons */}
      <div className="w-2/3 flex items-center justify-center">
        <div className="flex flex-col gap-8 relative">
          {contacts.map((item) => {
            const Icon = item.icon;
            const isOpen = !!openMap[item.id];

            return (
              <div key={item.id} className="relative flex items-center">
                {/* Icon Button */}
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center border bg-white shadow-lg transition-all duration-300
                  ${isOpen ? "scale-110 border-[#2f3a44]" : "hover:scale-105"}`}
                >
                  <Icon className="w-7 h-7 text-[#2f3a44]" />
                </button>

                {/* Sliding Panel */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ width: 0, opacity: 0, x: 10 }}
                      animate={{ width: 260, opacity: 1, x: 0 }}
                      exit={{ width: 0, opacity: 0, x: 10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="ml-4 overflow-hidden whitespace-nowrap rounded-full bg-[#2f3a44] text-white px-6 py-4 shadow-xl flex items-center"
                    >
                      <span className="text-sm tracking-wide">{item.value}</span>
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
