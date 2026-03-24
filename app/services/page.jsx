"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function Counter({ from, to, duration, inView, suffix = "" }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / (duration * 1000), 1);
        
        setCount(Math.floor(from + (to - from) * percentage));

        if (progress < duration * 1000) {
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Services() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <main className="w-full bg-[#050505]">
      {/* Existing Header */}
      <div className="h-screen flex flex-col items-center justify-center pt-24 text-center px-4">
        <h1 className="font-display text-5xl text-gold tracking-widest mb-6">Services</h1>
        <h2 className="font-body text-xl text-off-white tracking-widest">Section Coming — Day 2</h2>
      </div>

      {/* 02. PORTFOLIO SHOOTS */}
      <section className="bg-[#050505] py-[120px] px-[20px] md:px-[60px] overflow-hidden">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative order-2 md:order-1"
          >
            {/* Large Faint Number */}
            <div className="absolute top-[-60px] left-[-30px] font-display text-[140px] text-[rgba(201,168,76,0.05)] leading-none z-0 pointer-events-none select-none">
              02
            </div>

            <div className="relative z-10">
              <h3 className="font-body text-[8px] tracking-[5px] text-gold uppercase mb-4">PORTFOLIO SHOOTS</h3>
              <h2 className="font-display text-[52px] font-[300] text-off-white leading-[1.1]">
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
                <span className="font-body text-[9px] text-gold tracking-[3px] uppercase relative">
                  Browse Photographers &rarr;
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Side (Right) */}
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
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 03. WORKSHOPS */}
      <section className="bg-[#080808] py-[120px] px-[20px] md:px-[60px] overflow-hidden">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Image Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 order-1 md:order-1"
          >
            <div className="relative w-full aspect-[4/5] bg-[#111] border border-[rgba(201,168,76,0.15)] group overflow-hidden">
              <div className="absolute top-0 left-0 w-[20px] h-[20px] border-t-[1.5px] border-l-[1.5px] border-gold z-20 m-[10px]" />
              <div className="absolute bottom-0 right-0 w-[20px] h-[20px] border-b-[1.5px] border-r-[1.5px] border-gold z-20 m-[10px]" />

              <Image 
                src="/images/services/workshops.jpg"
                alt="Workshops"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
              />
            </div>
          </motion.div>

          {/* Text Side (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative order-2 md:order-2"
          >
            <div className="absolute top-[-60px] right-[0px] md:left-[auto] md:right-[-30px] font-display text-[140px] text-[rgba(201,168,76,0.05)] leading-none z-0 pointer-events-none select-none">
              03
            </div>

            <div className="relative z-10">
              <h3 className="font-body text-[8px] tracking-[5px] text-gold uppercase mb-4">WORKSHOPS</h3>
              <h2 className="font-display text-[52px] font-[300] text-off-white leading-[1.1]">
                Sharpen Every Edge Before the Stage.
              </h2>
              
              <div className="h-[1px] w-[48px] bg-gold my-[24px]" />
              
              <p className="font-body text-[12px] text-[rgba(255,255,255,0.7)] leading-[2.2] mb-8">
                Talent alone is not enough. The performers who make it to the national stage are the ones who never stop refining their craft. Our curated workshop program brings together Delhi NCR&apos;s finest coaches, choreographers, stylists, and industry professionals for intensive sessions designed to prepare you for the big stage. From ramp walk technique and stage presence to contemporary choreography and grooming — we cover every dimension of a performer&apos;s development.
              </p>

              {/* Four Pills Container */}
              <div className="flex flex-wrap gap-[12px] mb-10">
                {["Dance Workshops", "Ramp Walk & Fashion", "Grooming & Personality", "Stage Presence"].map((pill, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.6 + 0.1 * i, duration: 0.5 }}
                     className="border border-[rgba(201,168,76,0.3)] bg-transparent text-gold font-body text-[9px] tracking-[2px] uppercase py-[8px] px-[20px]"
                   >
                     {pill}
                   </motion.div>
                ))}
              </div>

              <div className="space-y-[20px] mb-12">
                {[
                  { title: "Industry Professionals", text: "Every workshop is conducted by verified coaches and industry professionals with real working experience." },
                  { title: "One-Time and Recurring", text: "Choose from intensive one-day masterclasses or recurring weekly sessions built around your schedule." },
                  { title: "Finale Preparation Packages", text: "Selected finalists get access to exclusive pre-finale preparation workshops designed specifically for Vistaar events." }
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
                <span className="font-body text-[9px] text-gold tracking-[3px] uppercase relative">
                  Browse Workshops &rarr;
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 04. CASTING AUDITIONS */}
      <section className="bg-[#050505] py-[120px] px-[20px] md:px-[60px] overflow-hidden">
        <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Side (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative order-2 md:order-1"
          >
            <div className="absolute top-[-60px] left-[-30px] font-display text-[140px] text-[rgba(201,168,76,0.05)] leading-none z-0 pointer-events-none select-none">
              04
            </div>

            <div className="relative z-10">
              <h3 className="font-body text-[8px] tracking-[5px] text-gold uppercase mb-4">CASTING AUDITIONS</h3>
              <h2 className="font-display text-[52px] font-[300] text-off-white leading-[1.1]">
                Where Talent Meets Opportunity.
              </h2>
              
              <div className="h-[1px] w-[48px] bg-gold my-[24px]" />
              
              <p className="font-body text-[12px] text-[rgba(255,255,255,0.7)] leading-[2.2] mb-10">
                Getting discovered is no longer about who you know. Through the Vistaar Studios casting board, brands, directors, and agencies post active casting calls and audition listings directly to our platform — and our registered talent can apply in minutes. Whether you are looking for brand ambassador opportunities, commercial shoots, music video appearances, or fashion campaign features, our casting board connects you with real paid opportunities from verified clients actively seeking fresh talent.
              </p>

              {/* Stats Row */}
              <div ref={statsRef} className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10">
                {[
                  { count: 120, label: "Active\nCasting Board", suffix: "+" },
                  { count: 40, label: "Verified\nBrand Clients", suffix: "+" },
                  { count: 1500, label: "Direct\nApplications", suffix: "+" },
                  { count: 100, label: "Free\nFor Talent", suffix: "%" }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="font-display text-[48px] text-gold leading-none mb-2">
                       <Counter from={0} to={stat.count} duration={1.5} inView={statsInView} suffix={stat.suffix} />
                    </div>
                    <div className="font-body text-[9px] text-[rgba(255,255,255,0.5)] tracking-[2px] uppercase whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-[20px] mb-12">
                {[
                  { title: "Real Paid Opportunities", text: "Every casting on our board is a genuine paid or credited opportunity — no unpaid exposure-only listings." },
                  { title: "Verified Brand Clients", text: "All brands and agencies posting on our casting board are verified by the Vistaar Studios team before going live." },
                  { title: "Apply in Minutes", text: "Your Vistaar talent profile works as your instant application. One click sends your portfolio and details to the casting client." }
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
                <span className="font-body text-[9px] text-gold tracking-[3px] uppercase relative">
                  View Casting Board &rarr;
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Side (Right) */}
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
                src="/images/services/casting-auditions.jpg"
                alt="Casting Auditions"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 z-10"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
