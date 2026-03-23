"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 500], [0.85, 0.6]);

  return (
    <section className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center items-center pointer-events-none z-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-[-2]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay with subtle gradient */}
      <motion.div 
        className="absolute inset-0 z-[-1] bg-gradient-to-b from-[rgba(5,5,5,0.85)] to-[rgba(5,5,5,0.6)]" 
        style={{ opacity: bgOpacity }} 
      />

      {/* Radial Vignette Overlay */}
      <div 
        className="absolute inset-0 z-[-1] pointer-events-none" 
        style={{ background: 'radial-gradient(circle, transparent 40%, rgba(5,5,5,0.85) 100%)' }} 
      />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center z-10 px-6 max-w-4xl mx-auto mt-20 md:mt-0">
        
        {/* Eyebrow */}
        <motion.div 
          className="flex items-center space-x-4 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-[10px] md:text-xs text-gold font-body uppercase tracking-[0.3em]">
            India&apos;s Premier Talent Platform
          </span>
        </motion.div>

        {/* Main Headings */}
        <div className="flex flex-col items-center mb-6 leading-none cursor-default">
          <motion.h1 
            className="font-display font-[300] text-[clamp(64px,10vw,120px)] text-off-white relative whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Where <span className="text-gold italic">Talent</span>
          </motion.h1>

          <motion.h2 
            className="font-display font-[300] text-[clamp(64px,10vw,120px)] text-off-white relative mt-[-10px] md:mt-[-20px] whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <span className="text-gold italic">Meets</span> Stage
          </motion.h2>
        </div>

        {/* Description */}
        <motion.p 
          className="text-off-white-dim font-body text-[11px] tracking-[2px] max-w-[440px] mx-auto text-center mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          India&apos;s most ambitious fashion and dance talent platform. 
          Discover, perform, and rise to the national stage.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <a href="/events" className="group relative px-6 py-3 bg-gold border border-gold overflow-hidden transition-all duration-300">
            <span className="relative z-10 font-body text-[9px] uppercase tracking-[4px] text-black-deep group-hover:text-off-white transition-colors duration-300">
              Explore Events
            </span>
            <div className="absolute inset-0 bg-black-deep transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-[0]" />
          </a>
          <a href="/about" className="group relative px-6 py-3 border border-off-white overflow-hidden transition-all duration-300">
            <span className="relative z-10 font-body text-[9px] uppercase tracking-[4px] text-off-white group-hover:text-black-deep transition-colors duration-300">
              Our Story
            </span>
            <div className="absolute inset-0 bg-off-white transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out z-[0]" />
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="font-body text-[9px] uppercase tracking-widest text-gold opacity-80">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[30%] bg-gold"
            animate={{ top: ["-30%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
