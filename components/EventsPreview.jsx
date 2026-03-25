"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function EventsPreview() {
  const containerRef = useRef(null);
  const [latestEvent, setLatestEvent] = useState(null);

  useEffect(() => {
    const fetchLatestEvent = async () => {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'Upcoming')
        .order('event_date', { ascending: true })
        .limit(1)
        .single();
      
      if (data) setLatestEvent(data);
    };

    fetchLatestEvent();
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  return (
    <section 
      id="events"
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
          {/* Section Label */}
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-[8px] text-gold font-body uppercase tracking-[5px]">
              UPCOMING EVENTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-[300] text-[clamp(48px,5vw,64px)] text-off-white mb-2 leading-tight">
            Where Every Stage <br />
            <span className="text-gold italic">Tells a Story.</span>
          </h2>

          {/* Description */}
          <p className="text-off-white-dim font-body text-[12px] tracking-[1px] leading-[2] mb-10 max-w-[480px]">
            At Vistaar Studios, every event is more than a competition — it is a carefully produced experience where emerging dancers, models, and performers step into the spotlight they have always deserved. From preliminary rounds to grand finales, every stage we build is designed to honour the talent standing on it.
          </p>
        </motion.div>

        {/* Right: Single Event Card + Button */}
        <motion.div 
          className="relative w-full flex flex-col items-center justify-center order-1 md:order-2 gap-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {latestEvent ? (
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[450px] border border-[rgba(201,168,76,0.3)] bg-[#080808] overflow-hidden group">
              <Image 
                src={latestEvent.image_url || "/gallery-1.png"}
                alt={latestEvent.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start text-left">
                <span className="font-body text-[9px] text-gold tracking-[2px] uppercase mb-1">
                  {new Date(latestEvent.event_date).toLocaleDateString("en-US", { month: 'long', day: 'numeric' })}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-off-white mb-1">
                  {latestEvent.title}
                </h3>
                <p className="font-body text-[10px] text-off-white-dim line-clamp-2">
                  {latestEvent.location}
                </p>
              </div>
            </div>
          ) : (
            // Fallback placeholder if no event exists
            <div className="relative w-[280px] h-[350px] md:w-[320px] md:h-[450px] border border-[rgba(201,168,76,0.3)] bg-[#080808] flex items-center justify-center">
              <span className="text-off-white-dim font-body text-xs tracking-widest">NO UPCOMING EVENTS</span>
            </div>
          )}


          {/* CTA Link Moved Below Card */}
          <Link href="/events" className="group relative inline-flex items-center space-x-4 w-max pointer-events-auto mt-4">
            <span className="font-body text-[8px] uppercase tracking-[5px] text-off-white-dim group-hover:text-gold transition-colors duration-300">
              EXPLORE ALL EVENTS
            </span>
            <div className="w-[50px] h-[1px] bg-gold opacity-80" />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}