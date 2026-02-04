import { useInView } from "framer-motion";
import { useRef } from "react";

const HighlightLine = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <p
      ref={ref}
      className={`
        text-xl lg:text-2xl leading-relaxed transition-all duration-700
        ${isInView ? "text-[#2f3a44] opacity-100" : "text-[#9aa8b6] opacity-40"}
      `}
    >
      {text}
    </p>
  );
};

export default HighlightLine;
