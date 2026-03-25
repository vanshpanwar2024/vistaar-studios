import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import WhatWeDo from "@/components/WhatWeDo";
import EventsPreview from "@/components/EventsPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-black-deep">
        <AboutPreview />
        <WhatWeDo />
        
        <EventsPreview />

        <Contact />
      </div>
    </>
  );
}