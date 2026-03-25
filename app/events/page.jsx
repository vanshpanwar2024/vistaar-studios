"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await supabase
          .from('events')
          .select('*')
          .eq('status', 'Upcoming')
          .order('event_date', { ascending: true });
        setEvents(data || []);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <main className="w-full bg-[#050505] min-h-screen relative overflow-hidden pt-[120px] pb-[80px] px-6 md:px-12 z-10">
      {/* Global Fixed Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display text-[15vw] text-white opacity-10 tracking-widest whitespace-nowrap select-none">
          VISTAAR
        </h1>
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
        <div className="flex flex-col items-center mb-[64px] text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl text-off-white tracking-wide mb-6"
          >
            Upcoming <span className="italic text-gold font-[300]">Events</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[60px] h-[1px] bg-gold opacity-50"
          />
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-full h-[500px] bg-[#111] animate-pulse border border-[rgba(201,168,76,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.05)] to-transparent translate-x-[-100%] animate-[shimmer_1.5s_infinite]" />
              </div>
            ))}
          </div>
        ) : events.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <p className="font-body text-[14px] md:text-[16px] text-off-white-dim uppercase tracking-[3px] mb-8">
              New events coming soon.
            </p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-gold text-gold font-body text-[10px] uppercase tracking-widest py-3 px-8 hover:bg-gold hover:text-black-deep transition-all duration-300"
            >
              Follow us on Instagram for updates
            </a>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative group border border-[rgba(201,168,76,0.15)] bg-[#0e0e0e] overflow-hidden flex flex-col justify-between p-8 ${event.is_featured ? 'md:col-span-3 min-h-[600px] md:flex-row items-end p-12' : 'min-h-[500px]'}`}
              >
                {/* Background Image Setup */}
                {event.image_url && (
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                    <img 
                      src={event.image_url} 
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                )}
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-[15px] h-[15px] border-t border-l border-gold m-[10px] z-20" />
                <div className="absolute top-0 right-0 w-[15px] h-[15px] border-t border-r border-gold m-[10px] z-20" />
                <div className="absolute bottom-0 left-0 w-[15px] h-[15px] border-b border-l border-gold m-[10px] z-20" />
                <div className="absolute bottom-0 right-0 w-[15px] h-[15px] border-b border-r border-gold m-[10px] z-20" />

                <div className={`relative z-20 ${event.is_featured ? 'md:w-1/2' : ''}`}>
                  <span className="inline-block bg-[rgba(201,168,76,0.1)] border border-gold text-gold font-body text-[8px] uppercase tracking-widest px-3 py-1 mb-4">
                    {event.category}
                  </span>
                  <h3 className={`font-display text-off-white leading-tight mb-4 ${event.is_featured ? 'text-4xl md:text-6xl' : 'text-3xl'}`}>
                    {event.title}
                  </h3>
                  <p className={`font-body text-off-white-dim mb-6 ${event.is_featured ? 'text-[12px] md:text-[14px]' : 'text-[11px]'}`}>
                    {event.description}
                  </p>
                  
                  <div className="flex flex-col gap-2 mb-8 font-body text-[10px] text-[rgba(255,255,255,0.7)] uppercase tracking-wider">
                    <p><span className="text-gold mr-2">Date:</span> {new Date(event.event_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                    <p><span className="text-gold mr-2">Location:</span> {event.location}</p>
                    <p><span className="text-gold mr-2">Fee:</span> ₹{event.preliminary_fee}</p>
                  </div>
                </div>

                <div className={`relative z-20 ${event.is_featured ? 'md:w-1/2 flex justify-end' : ''}`}>
                  <Link href="/register" className={`group/btn inline-block bg-gold text-black-deep font-body text-[10px] uppercase tracking-widest py-3 px-8 hover:bg-off-white transition-colors duration-300 ${event.is_featured ? 'mb-4' : 'w-full text-center'}`}>
                    Register Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </main>
  );
}
