import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import WhatWeDo from "@/components/WhatWeDo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-black-deep">
        <AboutPreview />
        <WhatWeDo />
        
        <div id="events" className="h-screen flex items-center justify-center">
          <h2 className="font-display text-4xl text-gold tracking-widest">Events Section Coming — Day 2</h2>
        </div>

        <Contact />
      </div>
    </>
  );
}