"use client";
import Footer from "@/components/landingPage/Footer";
import FXCTASection from "@/components/landingPage/FXCTASection";
import FXVolatilitySection from "@/components/landingPage/FXSections";
import HeroSection from "@/components/landingPage/HeroSection";
import MarketIntelligenceSection from "@/components/landingPage/MarketIntelligenceSection";
import Navbar from "@/components/landingPage/navbar";
import ProblemSection from "@/components/landingPage/ProblemSection";
import TradeIntelligenceSection from "@/components/landingPage/TradeIntelligenceSection";

import { motion, useScroll, useSpring } from "framer-motion";
// ... your existing imports

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start invisible and lower down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% visible
      transition={{
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1.0], // The "Premium" smooth curve
      }}
    >
      {children}
    </motion.div>
  );
}

// page.js
export default function Page() {
  return (
    <main className="bg-[#050505]">
      <Navbar />

      {/* Assign IDs to match your NavItems */}
      <section id="hero">
        <HeroSection />
      </section>

      <Reveal>
        <section id="problem">
          <ProblemSection />
        </section>
      </Reveal>

      <Reveal>
        <section id="engine">
          <MarketIntelligenceSection />
        </section>
      </Reveal>

      <Reveal>
        <section id="vectors">
          <TradeIntelligenceSection />
        </section>
      </Reveal>

      <Reveal>
        <section id="risks">
          <FXVolatilitySection />
        </section>
      </Reveal>

      <FXCTASection />
      <Footer />
    </main>
  );
}
