import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const menuItems = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [detached, setDetached] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detach navbar on scroll (DESKTOP ONLY)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) setDetached(true);
      else setDetached(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = menuItems.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* ===== TOP BAR (LOGO + HAMBURGER) ===== */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 bg-[#f0f6fb] lg:bg-transparent">
        <h1 className="text-2xl font-serif text-[#2f3a44]">
          Portfolio
        </h1>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl text-[#2f3a44]"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ===== DESKTOP CENTER NAV ===== */}
      {!detached && (
        <motion.nav
          className="hidden lg:flex justify-center w-full sticky top-0 z-40 bg-[#f0f6fb]"
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="flex gap-16 py-6 text-2xl font-serif text-[#2f3a44]">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize hover:text-[#6b3e2e] transition-colors"
              >
                {item}
              </button>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* ===== DESKTOP / TABLET DETACHED LEFT MENU ===== */}
      {detached && (
        <motion.div
          className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-50"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <div className="flex flex-col gap-5 bg-white/70 backdrop-blur-md px-4 py-5 rounded-2xl shadow-xl">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`group capitalize transition-all duration-300
                  ${
                    active === item
                      ? "text-[#6b3e2e] scale-110"
                      : "text-[#2f3a44] hover:text-[#6b3e2e]"
                  }
                `}
              >
                <span className="text-sm xl:text-base font-medium">
                  {item}
                </span>

                {/* Dot indicator */}
                <span
                  className={`block mx-auto mt-1 w-1.5 h-1.5 rounded-full transition-all
                    ${
                      active === item
                        ? "bg-[#6b3e2e]"
                        : "bg-transparent group-hover:bg-[#6b3e2e]"
                    }
                  `}
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* ===== MOBILE COMPACT MODAL MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-[85%] max-w-sm bg-[#f0f6fb] rounded-2xl shadow-2xl px-8 py-10 flex flex-col gap-6"
            >
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-xl font-serif capitalize text-[#2f3a44] hover:text-[#6b3e2e]"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
