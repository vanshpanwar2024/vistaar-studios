"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";

export default function AboutPreview() {
  const containerRef = useRef(null);
  
  // Set up the overlapping scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate the image overlapping / translating upwards slower than the background
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-black-deep py-32 md:py-48 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          className="flex flex-col justify-center order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[10px] text-gold font-body uppercase tracking-[0.3em]">
              Who We Are
            </span>
          </div>

          <h2 className="font-display font-[300] text-5xl md:text-7xl text-off-white mb-8 leading-tight">
            Elevating <br />
            <span className="text-gold italic">Standards</span>
          </h2>

          <p className="text-off-white-dim font-body text-sm md:text-base tracking-[1px] leading-relaxed mb-10 max-w-md">
            At Vistaar Studios, we blur the lines between high fashion and raw talent. We are a premier production house dedicated to orchestrating elite runway shows, competitive dance forums, and portfolio-defining shoots that catapult emerging artists onto the national stage.
          </p>

          <a href="/about" className="group relative inline-flex items-center space-x-4 w-max pointer-events-auto">
            <span className="font-body text-[9px] uppercase tracking-[4px] text-off-white group-hover:text-gold transition-colors duration-300">
              Discover Our Story
            </span>
            <div className="w-12 h-[1px] bg-off-white/30 group-hover:w-20 group-hover:bg-gold transition-all duration-500 ease-out" />
          </a>
        </motion.div>

        {/* Right: Stacked Fanned Cards */}
        <motion.div 
          className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="relative w-[340px] h-[460px] cursor-pointer"
            initial="initial"
            whileHover="hover"
          >
            {[
              // Card 1: -6 deg
              { id: 1, src: "/gallery-1.png", initialRotate: -6, hoverRotate: -15, hoverX: -120, hoverY: 15, zIndex: 10 },
              // Card 2: 3 deg
              { id: 2, src: "/gallery-2.png", initialRotate: 3,  hoverRotate: -5,  hoverX: -40,  hoverY: -10, zIndex: 20 },
              // Card 3: -2 deg
              { id: 3, src: "/gallery-3.png", initialRotate: -2, hoverRotate: 5,   hoverX: 40,   hoverY: -10, zIndex: 30 },
              // Card 4: 0 deg (straight, front)
              { id: 4, src: "/gallery-4.png", initialRotate: 0,  hoverRotate: 15,  hoverX: 120,  hoverY: 15, zIndex: 40 },
            ].map((card) => (
              <motion.div
                key={card.id}
                className="absolute inset-0 w-full h-full rounded-sm border border-[rgba(201,168,76,0.6)] bg-[#111] overflow-hidden drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                style={{ transformOrigin: "bottom center" }}
                variants={{
                  initial: { 
                    rotate: card.initialRotate, 
                    x: 0, 
                    y: 0,
                    zIndex: card.zIndex,
                    scale: 1
                  },
                  hover: { 
                    rotate: card.hoverRotate, 
                    x: card.hoverX, 
                    y: card.hoverY,
                    zIndex: card.zIndex,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: card.hoverY - 30, // lift it up higher
                  zIndex: 50, // pop to front
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Replace these with your real images in the /public folder */}
                <Image 
                  src={card.src}
                  alt={`Vistaar Card ${card.id}`}
                  fill
                  className="object-cover opacity-90"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}