import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
type MagneticProps = {
  x: number;
  y: number;
  icon: string;
  name: string;
};

export const MagneticIcon = ({ x, y, icon, name }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dampen = 30;

  const translateX = useTransform(mouseX, (v) => v / dampen);
  const translateY = useTransform(mouseY, (v) => v / dampen);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      <motion.div
        style={{ x: translateX, y: translateY }}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-20 h-20 rounded-full bg-white shadow-lg flex flex-col items-center justify-center cursor-pointer"
      >
        <img src={icon} alt={name} className="w-10 h-10 mb-1" />
        <span className="text-xs text-[#2f3a44] font-medium">{name}</span>
      </motion.div>
    </motion.div>
  );
};
