import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, align = "center" }) {
  const isLeft = align === "left";
  
  return (
    <div className={`flex items-center ${isLeft ? "justify-start" : "justify-center"} space-x-4 mb-4 md:mb-8`}>
      <div className="w-12 h-[1px] bg-gold opacity-50" />
      <span className="text-[10px] text-gold font-body uppercase tracking-[0.3em]">
        {title}
      </span>
      <div className="w-12 h-[1px] bg-gold opacity-50" />
    </div>
  );
}