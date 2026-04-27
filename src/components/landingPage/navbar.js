"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Logo from "../icons/Logo";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isNavigating = useRef(false); // Ref to track manual navigation
  const { scrollY } = useScroll();

  // 1. SMART HIDE LOGIC with Navigation Guard
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Only hide if we aren't currently in the middle of a manual "scrollToSection" jump
    if (!isNavigating.current) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  // 2. ACTIVE SECTION DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "problem", "engine", "vectors", "risks"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // 3. DELAYED NAVIGATION LOGIC
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      isNavigating.current = true; // Lock hide logic
      setHidden(false); // Ensure nav is visible during jump

      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);

      // Re-enable smart hide after the smooth scroll finishes (approx 800ms-1s)
      setTimeout(() => {
        isNavigating.current = false;
      }, 1000);
    }
  };

  return (
    <>
      {/* MOBILE TAP-OUTSIDE BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[90] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-4 right-4 md:left-6 md:right-6 h-[47px] flex items-center justify-between z-[100]"
      >
        {/* LEFT LOGO */}
        <div
          className="flex items-center gap-[4px] h-[47px] flex-shrink-0 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Logo className="w-[30px] h-[30px]" />
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[18px] md:text-[20px] leading-none tracking-[-1px]">
              Fotuna
            </div>
            <div className="text-[#F6F3EA]/60 text-[8px] md:text-[10px] uppercase tracking-[1px] whitespace-nowrap mt-1">
              FX Decision Intelligence
            </div>
          </div>
        </div>

        {/* CENTER NAV (Desktop) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-[5px] px-2 py-1.5 h-[47px] bg-white/10 backdrop-blur-[15px] rounded-[30px] border border-white/5">
          {["hero", "problem", "engine", "vectors", "risks"].map((id) => (
            <NavItem
              key={id}
              active={activeSection === id}
              onClick={() => scrollToSection(id)}
            >
              {id === "hero"
                ? "Home"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </NavItem>
          ))}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <button className="hidden md:flex px-6 h-[41px] bg-[#C29241] rounded-[40px] items-center justify-center text-black text-[14px] font-bold transition-transform active:scale-95">
              Start for free
            </button>
          </Link>

          <button
            className="lg:hidden text-white flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : {}}
              className="w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : {}}
              className="w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : {}}
              className="w-6 h-0.5 bg-white"
            />
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-[60px] left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 border border-white/10 lg:hidden shadow-2xl"
            >
              {["hero", "problem", "engine", "vectors", "risks"].map((item) => (
                <div
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg uppercase tracking-widest transition-colors ${activeSection === item ? "text-[#C29241]" : "text-white/60"}`}
                >
                  {item === "hero" ? "Home" : item}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

function NavItem({ children, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center px-4 h-[35px] rounded-[20px]
        text-white uppercase text-[12px] tracking-[1px] cursor-pointer
        transition-all duration-300
        ${
          active
            ? "bg-[rgba(227,218,191,0.15)] border border-white/20 backdrop-blur-[25px] shadow-[inset_2px_-2px_4px_rgba(0,0,0,0.3),inset_-2px_2px_4px_rgba(0,0,0,0.3)]"
            : "hover:bg-white/5 opacity-60 hover:opacity-100"
        }
      `}
    >
      {children}
    </div>
  );
}
