"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-[rgba(5,5,5,0.95)] backdrop-blur-md" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group mix-blend-screen hover:scale-[1.02] transition-transform duration-500 -ml-2 md:-ml-6 mt-1 md:mt-2">
            <div className="relative w-48 h-20 md:w-60 md:h-24">
              <Image 
                src="/logo.png" 
                alt="Vistaar Studios"
                fill
                priority
                className="object-contain scale-[1.25] md:scale-[1.4]"
              />
            </div>
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative font-body font-[300] text-sm tracking-[3px] text-off-white hover:text-white transition-colors"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300 origin-left"
                />
              </Link>
            ))}
          </div>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/register"
              className="hidden md:inline-block border border-gold text-gold font-body text-sm uppercase tracking-wide py-2 px-6 rounded-none hover:bg-gold hover:text-black-deep transition-all duration-300"
            >
              Register Now
            </Link>
            
            {/* Mobile Menu Icon */}
            <button 
              className="md:hidden flex flex-col space-y-1.5 p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="w-6 h-0.5 bg-gold block"></span>
              <span className="w-6 h-0.5 bg-gold block"></span>
              <span className="w-4 h-0.5 bg-gold block"></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] bg-black-deep flex flex-col justify-center items-center"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
          >
            <button 
              className="absolute top-8 right-6 text-gold text-sm uppercase tracking-widest font-body border border-gold/30 px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Close
            </button>
            
            <div className="flex flex-col space-y-8 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <Link 
                    href={link.href}
                    className="font-display text-4xl text-off-white hover:text-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <Link 
                  href="/register"
                  className="inline-block border border-gold text-gold font-body text-sm uppercase tracking-wide py-3 px-8 rounded-none hover:bg-gold hover:text-black-deep transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
