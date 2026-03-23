"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function JoinUs() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] overflow-hidden selection:bg-gold selection:text-black-deep relative">
      
      {/* Background Text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-display text-[15vw] text-white opacity-10 tracking-widest whitespace-nowrap select-none">
          VISTAAR
        </h1>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 isolate z-10">
        <motion.div 
          className="text-center w-full max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Label */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gold opacity-50" />
            <span className="font-body text-[10px] tracking-[4px] text-gold uppercase">
              BE PART OF VISTAAR
            </span>
            <div className="w-12 h-[1px] bg-gold opacity-50" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={itemVariants} className="font-display text-[50px] md:text-[80px] font-[300] text-off-white leading-[1.1]">
            Build Something
          </motion.h2>
          <motion.h2 variants={itemVariants} className="font-display text-[50px] md:text-[80px] italic text-gold leading-[1.1]">
            Extraordinary With Us.
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="font-body text-[12px] text-off-white-dim leading-loose max-w-[600px] mx-auto mt-6">
            Vistaar Studios is more than an events company — it is a growing ecosystem of talent, creativity, and ambition. Whether you are a studio, a model, a photographer, an artist, a makeup artist, or a brand — there is a place for you here.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => scrollToSection('overview')}
        >
          <span className="font-body text-[9px] text-gold tracking-widest uppercase opacity-60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2 — OVERVIEW CARDS */}
      <section id="overview" className="bg-transparent py-[100px] px-[24px] md:px-[60px]">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-[10px] tracking-[4px] text-gold uppercase opacity-80 mb-4 block">
              WHO WE ARE LOOKING FOR
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-off-white font-[300] leading-tight mb-6">
              Six Ways to Join Vistaar.
            </h2>
            <p className="font-body text-[12px] text-off-white-dim leading-loose max-w-[500px] mx-auto">
              Every role in the Vistaar ecosystem is built on real value exchange. You bring your talent and expertise. We bring the platform, the audience, and the opportunity.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-[1200px] mx-auto">
            {[
              { num: '01', image: '/join-1.png', title: 'Studio Partners', desc: "Partner with Vistaar and earn revenue share while giving your students Delhi NCR's most prestigious stage.", target: 'studio-partners' },
              { num: '02', image: '/join-2.png', title: 'Models', desc: "Walk our runways, build your portfolio, and get discovered by brands and agencies actively looking for fresh faces.", target: 'models' },
              { num: '03', image: '/join-3.png', title: 'Photographers & Videographers', desc: "Shoot our events, join our marketplace, and build your client base through Vistaar's growing talent community.", target: 'photographers' },
              { num: '04', image: '/join-4.png', title: 'Artists & Performers', desc: "Perform at Vistaar events as showcase artists, opening acts, or brand activation performers on a real professional stage.", target: 'artists' },
              { num: '05', image: '/join-5.png', title: 'Makeup Artists', desc: "Be our official glam team. Get credited on all event content and build your clientele through our performer community.", target: 'makeup-artists' },
              { num: '06', image: '/join-6.png', title: 'Sponsors & Brands', desc: "Reach Delhi NCR's most passionate youth audience through event sponsorship, on ground activation, and digital campaigns.", target: 'sponsors' }
            ].map((card, idx) => (
              <motion.div 
                key={card.num}
                variants={itemVariants}
                className="group relative bg-[#111111] border border-[rgba(201,168,76,0.08)] p-[48px] px-[40px] cursor-pointer transition-all duration-500 hover:-translate-y-[6px] hover:border-[rgba(201,168,76,0.4)] overflow-hidden"
                onClick={() => scrollToSection(card.target)}
              >
                {/* Image Background Fill replacing large number */}
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover object-center mix-blend-overlay opacity-80 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-[28px] text-off-white mt-[16px]">{card.title}</h3>
                  <p className="font-body text-[11px] text-off-white-dim leading-[2] mt-[12px] max-w-[280px]">
                    {card.desc}
                  </p>
                  
                  <div className="font-body text-[9px] text-gold tracking-[3px] uppercase mt-[24px] inline-flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More <span>→</span>
                  </div>
                </div>

                {/* Animated Bottom Line */}
                <div className="absolute bottom-0 left-0 h-[1px] bg-gold w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 — WHY VISTAAR */}
      <section className="bg-transparent py-[120px] px-[24px] md:px-[60px] relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-24">
            <span className="font-body text-[10px] tracking-[4px] text-gold uppercase block mb-4">
              WHY VISTAAR
            </span>
            <h2 className="font-display text-[40px] md:text-[56px] text-off-white font-[300] leading-tight max-w-[700px] mx-auto">
              Real Value. Real Opportunity. Real Growth.
            </h2>
          </motion.div>

          {/* Feature Blocks */}
          <div className="flex flex-col md:flex-row items-start justify-center divide-y md:divide-y-0 md:divide-x md:divide-[rgba(201,168,76,0.12)] gap-[60px] md:gap-0">
            
            {/* Block 1 */}
            <motion.div variants={itemVariants} className="flex-1 text-center px-0 md:px-[60px]">
              <div className="text-gold text-[20px] opacity-80 mb-[24px]">◆</div>
              <h3 className="font-display text-[28px] text-off-white">Ground Floor Opportunity</h3>
              <p className="font-body text-[11px] text-off-white-dim leading-[2] mt-[16px]">
                Vistaar Studios is at the beginning of something national. Joining us now means growing with a platform that is building toward every major city in India. The relationships and credibility you build here compound over time.
              </p>
            </motion.div>

            {/* Block 2 */}
            <motion.div variants={itemVariants} className="flex-1 text-center px-0 md:px-[60px] pt-[60px] md:pt-0">
              <div className="text-gold text-[20px] opacity-80 mb-[24px]">◆</div>
              <h3 className="font-display text-[28px] text-off-white">Real Value Exchange</h3>
              <p className="font-body text-[11px] text-off-white-dim leading-[2] mt-[16px]">
                We do not offer exposure as payment. Every partner, artist, and collaborator in the Vistaar ecosystem gets real tangible value — revenue share, credits, marketplace listings, audience access, and industry connections that actually open doors.
              </p>
            </motion.div>

            {/* Block 3 */}
            <motion.div variants={itemVariants} className="flex-1 text-center px-0 md:px-[60px] pt-[60px] md:pt-0">
              <div className="text-gold text-[20px] opacity-80 mb-[24px]">◆</div>
              <h3 className="font-display text-[28px] text-off-white">A Community That Grows</h3>
              <p className="font-body text-[11px] text-off-white-dim leading-[2] mt-[16px]">
                When you join Vistaar Studios you join a network of studios, performers, creators, and brands all moving in the same direction. The connections you make here — between events, through the marketplace, across the community — are the real long term value.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </section>

    </main>
  );
}