"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function EventsPreview() {
  const containerRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'Upcoming')
          .order('event_date', { ascending: true })
          .limit(3);
        
        if (error) {
           console.error("Supabase error:", error);
           setError(true);
        } else if (data) {
           setEvents(data);
        }
      } catch (err) {
         console.error("Fetch error:", err);
         setError(true);
      }
    };

    fetchEvents();
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  
  return (
    <section 
      id="events"
      ref={containerRef}
      className="relative w-full bg-black-deep py-24 md:py-32 overflow-hidden z-10"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Top Section: Centered Heading & Subtext */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-20 md:mb-24">
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
          >
            <span className="block text-[10px] text-gold font-body uppercase tracking-[0.3em] mb-6">
              Upcoming Events
            </span>
            {/* Heading in one line as requested */}
            <h2 className="font-display font-[300] text-[clamp(32px,4vw,64px)] text-off-white leading-[1.1] mb-8 whitespace-nowrap">
              Where Every Stage <span className="text-gold italic">Tells a Story.</span>
            </h2>
          </motion.div>

          <motion.div 
             className="max-w-xl"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
          >
             <p className="text-off-white-dim font-body text-[13px] tracking-[0.05em] leading-[1.8]">
              At Vistaar Studios, every event is a carefully produced experience where emerging talent steps into the spotlight. From preliminary rounds to grand finales, we build stages designed to honour the art.
            </p>
          </motion.div>

        </div>

        {/* Middle Section: Grid of Smaller Event Cards (2-3 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-20">
          {error ? (
             <div className="col-span-1 md:col-span-3 w-full h-[200px] border border-dashed border-red-900/30 flex flex-col items-center justify-center gap-4">
                 <p className="text-red-400 text-sm uppercase tracking-widest">Unable to load events</p>
                 <button onClick={() => window.location.reload()} className="text-[10px] uppercase tracking-widest border-b border-red-400 text-red-400 pb-1 hover:text-white hover:border-white transition-colors">Retry</button>
             </div>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col w-full border border-[rgba(255,255,255,0.05)] bg-[#0A0A0A] overflow-hidden hover:border-[rgba(201,168,76,0.3)] transition-all duration-500"
              >
                {/* Image Section - Top */}
                <div className="relative w-full h-[240px] overflow-hidden">
                   {event.image_url ? (
                     <Image 
                        src={event.image_url}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   ) : (
                      <div className="w-full h-full bg-[#111] flex items-center justify-center">
                        <span className="text-off-white-dim text-xs">No Image</span>
                      </div>
                   )}
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Section - Bottom */}
                <div className="flex flex-col flex-grow p-6 md:p-8 bg-[#0A0A0A]">
                    
                    <div className="mb-3">
                      <span className="inline-block text-gold font-body text-[9px] uppercase tracking-[2px]">
                         {new Date(event.event_date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl text-white mb-3 group-hover:text-gold transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="font-body text-[11px] text-[rgba(255,255,255,0.6)] leading-relaxed mb-6 line-clamp-3">
                      {event.description}
                    </p>
                    
                     <div className="flex flex-wrap gap-4 text-[9px] text-off-white-dim font-body uppercase tracking-[0.1em] mb-6 mt-auto">
                        <div className="flex items-center gap-1.5">
                           <span className="text-gold">📍</span> <span className="truncate max-w-[120px]">{event.location}</span>
                        </div>
                        {event.preliminary_fee && (
                          <div className="flex items-center gap-1.5">
                             <span className="text-gold">🎟️</span> {event.preliminary_fee}
                          </div>
                        )}
                    </div>

                    <Link href={`/events/${event.id}`} className="inline-block border-b border-gold text-gold font-body text-[9px] uppercase tracking-[2px] pb-1 w-max hover:text-white hover:border-white transition-all duration-300">
                       View Details
                    </Link>
                </div>
              </motion.div>
            ))
          ) : (
             <div className="col-span-1 md:col-span-3 w-full h-[200px] border border-dashed border-[rgba(255,255,255,0.1)] flex items-center justify-center">
                 <p className="text-off-white-dim text-sm uppercase tracking-widest">No upcoming events found</p>
             </div>
          )}
        </div>

        {/* Bottom: Explore Button */}
        <div className="flex justify-center">
          <Link 
            href="/events" 
            className="group relative inline-flex items-center justify-center px-12 py-4 border border-[rgba(201,168,76,0.3)] hover:border-gold hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300"
          >
            <span className="font-body text-[10px] uppercase tracking-[3px] text-off-white group-hover:text-gold transition-colors">
              Explore All Events
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}