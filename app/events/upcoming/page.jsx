"use client";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  return (
    <main className="w-full bg-[#050505] min-h-screen relative overflow-hidden flex justify-center items-center px-6 md:px-12">
      {/* Global Fixed Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display text-[15vw] text-white opacity-10 tracking-widest whitespace-nowrap select-none">
          VISTAAR
        </h1>
      </div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-[10px] text-gold font-body uppercase tracking-[0.3em] mb-6 block">
          What Is Next
        </span>
        <h1 className="font-display font-[300] text-5xl md:text-[80px] text-off-white leading-[1.1] mb-8">
          Upcoming Events
        </h1>
        <div className="w-[60px] h-[1px] bg-gold opacity-30 mb-8" />
        <p className="font-body text-[13px] md:text-[15px] text-off-white-dim leading-[2.2]">
          Our next spectacular stages are currently in production. Stay tuned for official dates, venue announcements, and registration openings for the upcoming Vistaar Studios circuit across Delhi NCR.
        </p>
      </motion.div>
    </main>
  );
}