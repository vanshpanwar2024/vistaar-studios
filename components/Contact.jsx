"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_DATA } from "@/lib/data";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="contact" className="bg-[#050505] py-24 md:py-[140px] px-6 md:px-[60px] relative z-10 w-full overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Section Label */}
        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 h-[1px] bg-gold opacity-50" />
          <span className="text-[10px] text-gold font-body uppercase tracking-[0.3em]">
            Get In Touch
          </span>
          <div className="w-12 h-[1px] bg-gold opacity-50" />
        </motion.div>

        {/* Headings */}
       {/* Section Title for FAQs */}
        <motion.div variants={itemVariants} className="w-full max-w-6xl mb-12 text-center">
            <h2 className="font-display text-4xl text-off-white tracking-wider mb-2">Frequently Asked Questions</h2>
            <p className="font-body text-[10px] text-gold uppercase tracking-[3px]">Hover to Discover</p>
        </motion.div>

        {/* FAQs Section */}
        <motion.div variants={itemVariants} className="w-full max-w-6xl mb-24 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 text-left items-start">
          {FAQ_DATA.map((section, sIdx) => (
            <div key={sIdx} className="flex flex-col group/category cursor-pointer">
              <h3 className="font-display font-[300] text-[26px] text-gold mb-2 border-b border-[rgba(201,168,76,0.3)] pb-2 flex items-center justify-between transition-colors duration-300 group-hover/category:border-[rgba(201,168,76,0.8)]">
                <span>{section.category}</span>
                <span className="text-[14px] opacity-30 group-hover/category:opacity-100 transition-opacity duration-300">✦</span>
              </h3>
              
              <div className="flex flex-col overflow-hidden max-h-0 opacity-0 group-hover/category:max-h-[1500px] group-hover/category:opacity-100 transition-all duration-700 ease-in-out group-hover/category:mt-4">
                {section.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="group/faq border-b border-[rgba(245,240,232,0.06)] py-5">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-body text-[12px] md:text-[13px] text-off-white tracking-[0.5px] leading-relaxed transition-colors duration-300 group-hover/faq:text-gold w-[90%]">
                        {faq.q}
                      </h4>
                      <span className="font-display text-gold text-[20px] font-light opacity-50 group-hover/faq:opacity-100 transition-transform transform group-hover/faq:rotate-45 duration-300 leading-none">
                        +
                      </span>
                    </div>
                    <div className="overflow-hidden max-h-0 group-hover/faq:max-h-[500px] transition-all duration-700 ease-in-out">
                      <p className="font-body text-[11px] md:text-[12px] text-off-white-dim leading-[2] tracking-[0.5px] pt-4 pb-2 pr-6">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Further Assistance CTA */}
        <motion.div variants={itemVariants} className="mb-24 flex flex-col items-center">
            <p className="font-body text-[11px] text-off-white-dim mb-4 tracking-[1px]">Still have questions?</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-transparent border border-gold text-gold font-body text-[10px] uppercase tracking-[4px] font-semibold hover:bg-gold hover:text-black-deep transition-all duration-300"
            >
              Need Further Assistance
            </button>
        </motion.div>

        {/* Trust Signals */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-16 text-center">
          <span className="font-body text-[10px] text-gold uppercase tracking-[2px]">✦ 50+ Studio Partners Across India</span>
          <span className="font-body text-[10px] text-gold uppercase tracking-[2px]">✦ 300+ Participants Per Event</span>
          <span className="font-body text-[10px] text-gold uppercase tracking-[2px]">✦ Pan India Vision 2026</span>
        </motion.div>

        {/* Location */}
        <motion.div variants={itemVariants} className="text-center flex flex-col items-center">
          <span className="font-body text-[11px] text-off-white-dim tracking-[1px] flex items-center gap-2">
            <span>📍</span> Based in Delhi NCR <span className="text-[8px] mx-2 opacity-50">|</span> Serving Pan India
          </span>
        </motion.div>

      </motion.div>

      {/* Pop-up Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full max-w-2xl border border-[rgba(201,168,76,0.3)] p-8 md:p-12 bg-black-deep relative shadow-[0_0_40px_rgba(0,0,0,0.8)]"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-6 text-[28px] text-off-white-dim hover:text-gold transition-colors duration-300"
              >
                &times;
              </button>
              
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#080808] px-4">
                 <span className="font-display italic text-gold text-xl">Direct Message</span>
              </div>

              <form className="flex flex-col gap-6 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="font-body text-[10px] uppercase tracking-[2px] text-off-white-dim mb-2 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="bg-black border border-[rgba(201,168,76,0.2)] text-off-white p-4 font-body text-sm outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors duration-300 rounded-none w-full"
                      placeholder="Your Name"
                      pattern="^[a-zA-Z0-9\s]+$"
                      onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-Z0-9\s]/g, '')}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="font-body text-[10px] uppercase tracking-[2px] text-off-white-dim mb-2 ml-1">Phone Number</label>
                    <div className="flex">
                      <select 
                        className="bg-black border border-r-0 border-[rgba(201,168,76,0.2)] text-off-white p-4 font-body text-sm outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors duration-300 rounded-none w-[110px] appearance-none cursor-pointer"
                        defaultValue="+91"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+1">🇨🇦 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+86">🇨🇳 +86</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+39">🇮🇹 +39</option>
                        <option value="+34">🇪🇸 +34</option>
                        <option value="+7">🇷🇺 +7</option>
                        <option value="+55">🇧🇷 +55</option>
                        <option value="+27">🇿🇦 +27</option>
                        <option value="+92">🇵🇰 +92</option>
                        <option value="+880">🇧🇩 +880</option>
                        <option value="+94">🇱🇰 +94</option>
                        <option value="+977">🇳🇵 +977</option>
                        <option value="+60">🇲🇾 +60</option>
                        <option value="+64">🇳🇿 +64</option>
                      </select>
                      <input 
                        type="tel" 
                        className="bg-black border border-[rgba(201,168,76,0.2)] text-off-white p-4 font-body text-sm outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors duration-300 rounded-none w-full"
                        placeholder="Phone Number"
                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="font-body text-[10px] uppercase tracking-[2px] text-off-white-dim mb-2 ml-1">I am a...</label>
                  <select className="bg-black border border-[rgba(201,168,76,0.2)] text-off-white p-4 font-body text-sm outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors duration-300 rounded-none w-full appearance-none cursor-pointer">
                    <option value="participant">Participant</option>
                    <option value="studio">Studio Owner</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="font-body text-[10px] uppercase tracking-[2px] text-off-white-dim mb-2 ml-1">Message</label>
                  <textarea 
                    rows="4"
                    className="bg-black border border-[rgba(201,168,76,0.2)] text-off-white p-4 font-body text-sm outline-none focus:border-[rgba(201,168,76,0.6)] transition-colors duration-300 rounded-none w-full resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 w-full bg-gold text-black-deep font-body text-[10px] font-bold uppercase tracking-[4px] py-5 hover:bg-off-white transition-colors duration-300 shadow-[0_0_15px_rgba(201,168,76,0.2)] hover:shadow-[0_0_25px_rgba(245,240,232,0.4)]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}