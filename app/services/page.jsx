"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="w-full bg-[#050505] overflow-hidden">
      {/* Existing Hero */}
      <section className="h-screen flex flex-col items-center justify-center pt-24 text-center px-4 relative z-10 w-full">
        <h1 className="font-display text-5xl text-gold tracking-widest mb-6">Services</h1>
        <h2 className="font-body text-xl text-off-white tracking-widest">Section Coming — Day 2</h2>
      </section>

      {/* 02. PORTFOLIO SHOOTS */}
      <section className="bg-[#050505] py-[120px] px-[20px] md:px-[60px] w-full relative z-10">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Side (Left desktop, Bottom mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative order-2 md:order-1"
          >
            {/* Large Faint Number */}
            <div className="absolute top-[-60px] left-[-20px] md:left-[-30px] font-display text-[140px] text-[rgba(201,168,76,0.05)] leading-none z-0 pointer-events-none select-none">
              02
            </div>

            <div className="relative z-10">
              <h3 className="font-body text-[8px] tracking-[5px] text-gold uppercase mb-4">PORTFOLIO SHOOTS</h3>
              <h2 className="font-display text-[40px] md:text-[52px] font-[300] text-off-white leading-[1.1]">
                Build a Portfolio That Opens Doors.
              </h2>
              
              <div className="h-[1px] w-[48px] bg-gold my-[24px]" />
              
              <p className="font-body text-[12px] text-[rgba(255,255,255,0.7)] leading-[2.2] mb-10">
                Your portfolio is your first impression — and in the world of fashion and performance, first impressions determine everything. Through the Vistaar Studios marketplace, you can book verified professional photographers and videographers who specialise in talent, fashion, and performance photography. Every shoot is tailored to showcase your unique presence, build your professional profile, and open doors with brands, agencies, and casting directors actively looking for fresh talent.
              </p>

              <div className="space-y-[20px] mb-12">
                {[
                  { title: "Verified Professionals", text: "Every photographer and videographer on our platform is verified, reviewed, and rated by the Vistaar community." },
                  { title: "Tailored to You", text: "Whether you need model portfolios, dance reels, fashion editorials, or performance videos — we have the right creative for you." },
                  { title: "Special Rates for Vistaar Participants", text: "Registered Vistaar participants get exclusive discounted rates on all marketplace bookings." }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, duration: 0.8 }}
                    className="border-l-[2px] border-gold pl-[16px]"
                  >
                    <h4 className="font-display text-[18px] text-off-white mb-1">{feature.title}</h4>
                    <p className="font-body text-[10px] md:text-[11px] text-[rgba(255,255,255,0.7)] leading-relaxed">{feature.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="group inline-flex items-center cursor-pointer">
                <span className="font-body text-[9px] text-gold tracking-[3px] uppercase relative pb-1">
                  Browse Photographers &rarr;
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Side (Right desktop, Top mobile) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 order-1 md:order-2"
          >
            <div className="relative w-full aspect-[4/5] bg-[#111] border border-[rgba(201,168,76,0.15)] group overflow-hidden">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-[1.5px] border-l-[1.5px] border-gold z-20 m-[10px]" />
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-[1.5px] border-r-[1.5px] border-gold z-20 m-[10px]" />

              <Image 
                src="/images/services/portfolio-shoots.jpg"
                alt="Portfolio Shoots"
                fill
                className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-105 z-10"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
