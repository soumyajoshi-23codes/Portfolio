import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menuItems = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [detached, setDetached] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll detection for detaching navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setDetached(true);
      } else {
        setDetached(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer for highlighting active section
  useEffect(() => {
    const sections = menuItems.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* TOP NAVBAR (only visible before detach) */}
      {!detached && (
        <motion.nav
          className="w-full bg-[#f0f6fb] sticky top-0 z-50"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-[1400px] mx-auto flex items-center justify-center px-6 py-6">
            <ul className="flex gap-14 text-2xl font-serif text-[#4b4036]">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-[#4b4036] transition-colors"
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}

      {/* FLOATING LEFT MENU (after detach) */}
      {detached && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50"
        >
          <div className="flex flex-col gap-6 bg-white/70 backdrop-blur-md shadow-xl rounded-full px-4 py-6">

            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition-all duration-300
                  ${
                    active === item
                      ? "text-[#4b4036] scale-110"
                      : "text-[#4b4036] hover:text-[#4b4036]"
                  }
                `}
              >
                {item}

                {/* Active indicator dot */}
                {active === item && (
                  <motion.span
                    layoutId="activeDot"
                    className="block mx-auto mt-1 w-2 h-2 rounded-full bg-[#4b4020]"
                  />
                )}
              </button>
            ))}

          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
