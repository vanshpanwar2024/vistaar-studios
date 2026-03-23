// Marquee.jsx
"use client";
import React from "react";

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-gold text-black py-4 whitespace-nowrap">
      <div className="inline-block animate-[marquee_10s_linear_infinite]">
        <span className="font-display text-2xl uppercase tracking-widest mx-4">
          Next Generation Talent
        </span>
        <span className="font-display text-2xl uppercase tracking-widest mx-4 opacity-50">•</span>
        <span className="font-display text-2xl uppercase tracking-widest mx-4">
          Redefining Fashion
        </span>
        <span className="font-display text-2xl uppercase tracking-widest mx-4 opacity-50">•</span>
      </div>
    </div>
  );
}
