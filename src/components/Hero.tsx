import { motion } from "framer-motion";
import profileImg from "../assets/IMG_1036..jpeg";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className=" w-full bg-[#f0f6fb] relative z-30 mt-15 mb-33">
      {/* Centered container but full-width background */}
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 pt-0 pb-8 lg:pb-12 gap-12 lg:gap-20">
        {/* Left Image */}
<motion.div
  className="relative flex-shrink-0"
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
>

  {/* Soft glowing gradient ring */}
  <motion.div
    className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-[#d6e6f5] via-[#f0f6fb] to-[#e9dcd2] blur-2xl opacity-70"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Floating container */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{
      scale: 1.04,
      rotateY: 6,
      rotateX: -4,
    }}
    style={{ perspective: 1000 }}
    className="relative z-10"
  >
    <img
      src={profileImg}
      alt="profile"
      className="w-[360px] h-[480px] object-cover rounded-2xl shadow-2xl border border-white/40 backdrop-blur-sm"
    />

    {/* Subtle border shine overlay */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30 pointer-events-none" />
  </motion.div>
</motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-center max-w-[600px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h1 className="text-[60px] leading-[1.1] font-serif mb-8 text-[#4b4036]">
            Hi, I’m Soumya Joshi
          </h1>

          <p className="tracking-[5px] text-[#6b6158] mb-6 text-sm">
            FRONTEND DEVELOPER
          </p>

          <p className="text-[#7a6f65] mb-14 text-base"></p>

          <div className="flex gap-12">
            <motion.a
              href="/ResumeSoumyaJoshi.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative px-10 py-4 rounded-full border-2 border-[#4b4036] text-[#4b4036] font-medium overflow-hidden group"
            >
              {/* Hover fill animation */}
              <span className="absolute inset-0 bg-[#4b4036] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              <span className="relative group-hover:text-white transition-colors duration-300">
                Download CV
              </span>
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="relative px-10 py-4 rounded-full bg-[#4b4036] text-white font-medium shadow-lg overflow-hidden group"
            >
              {/* Light shine sweep */}
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />

              <span className="relative">Contact Me</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
