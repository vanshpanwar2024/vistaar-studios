"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { WHAT_WE_DO_CARDS } from "@/lib/data";

export default function WhatWeDo() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const animationRef = useRef(null);
  const resumeTimeoutRef = useRef(null);

  // Duplicate for infinite scroll
  const displayCards = [...WHAT_WE_DO_CARDS, ...WHAT_WE_DO_CARDS];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let speed = 1; // pixels per frame

    const scroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += speed;
        // Reset to beginning if we've scrolled past half
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered, isDragging]);

  // Update active dot based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const cardWidth = 320 + 24; // width + gap
      const index = Math.round(scrollRef.current.scrollLeft / cardWidth) % WHAT_WE_DO_CARDS.length;
      setActiveIndex(index);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
    // Resume auto-scroll after 1 second delay
    resumeTimeoutRef.current = setTimeout(() => {
      // setIsHovered handles the normal resume, but if they dragged and let go while not hovering, it should resume
      if (!scrollRef.current?.matches(':hover')) {
        setIsHovered(false);
      }
    }, 1000);
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 320 + 24; // width + gap
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  return (
    <section className="bg-black-deep py-20 pb-32 relative z-10 w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="flex items-center justify-center space-x-4 mb-10 md:mb-[48px]">
        <div className="w-8 md:w-12 h-[1px] bg-gold opacity-50" />
        <span className="text-[9px] md:text-[10px] text-gold font-body uppercase tracking-[0.3em]">
          What We Do
        </span>
        <div className="w-8 md:w-12 h-[1px] bg-gold opacity-50" />
      </div>

      {/* Cards Container */}
      <div 
        className="w-full relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div 
          ref={scrollRef}
          className={`flex gap-4 md:gap-[24px] overflow-x-hidden w-full select-none px-4 md:px-10 py-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            if (!isDragging) setIsHovered(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleInteractionEnd}
          onMouseLeaveCapture={handleInteractionEnd} // Catch case where mouse leaves while dragging
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleInteractionEnd}
        >
          {displayCards.map((card, idx) => (
            <div 
              key={idx}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[320px] h-[420px] bg-[#111111] overflow-hidden border border-[rgba(245,240,232,0.06)] rounded-none p-6 md:p-[40px] flex flex-col transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:-translate-y-[6px]"
            >
              {/* Background Image full fill */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image 
                  src={card.bgImage}
                  alt={card.title}
                  fill
                  className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-90 group-hover:scale-105"
                />
                {/* Gradient overlay just at the bottom to ensure text is readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-[#111111]/80 to-transparent z-10" />
              </div>

              {/* Content mapped over a precise grid/flex to keep layout strict */}
              <div className="z-20 relative flex flex-col justify-end h-full">
                <h3 className="font-display text-[28px] font-normal text-off-white mb-2 drop-shadow-md">
                  {card.title}
                </h3>
                
                {/* Description wrap is fixed height */}
                <div className="h-[80px] overflow-hidden mb-2">
                  <p className="font-body text-[11px] leading-[2] text-[rgba(245,240,232,0.8)] tracking-[0.5px] drop-shadow-md opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Animated Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-30" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center space-x-3 mt-10">
        {WHAT_WE_DO_CARDS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
              activeIndex === idx 
                ? 'bg-gold border border-gold scale-125' 
                : 'bg-transparent border border-gold opacity-50 hover:opacity-100'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}