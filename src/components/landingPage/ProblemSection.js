"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProblemSection() {
  // Animation variants for the text reveal
  const fadeIn = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <section className="relative w-full min-h-screen flex justify-center items-center py-20 px-6 overflow-hidden bg-[#080808]">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[100px]">
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          {...fadeIn}
          className="w-full lg:w-[55%] flex flex-col gap-6 text-center lg:text-left"
        >
          <h1 className="font-serif text-[42px] leading-[1.1] md:text-[68px] md:leading-[1.1] tracking-[-0.04em] text-[#CFAD72]">
            FX volatility can <br />
            <span className="text-white italic">sink your shipment.</span>
          </h1>

          <p className="font-['IBM_Plex_Sans_Condensed'] text-[18px] md:text-[22px] leading-relaxed text-[#B7B7B7] max-w-[700px] mx-auto lg:mx-0">
            Your goods move across oceans on a fixed timeline. Currency rates do
            not. A 7-day payment delay during a rate shock can transform a
            profitable shipment into a balance-sheet loss —{" "}
            <span className="text-white">before the invoice is settled.</span>
          </p>
        </motion.div>

        {/* DIVIDER LINE */}
        <div className="hidden lg:block w-[1px] h-[450px] bg-gradient-to-b from-transparent via-[#D3C4B2]/20 to-transparent" />

        {/* RIGHT: TIMELINE GRID */}
        <div className="flex gap-8 w-full max-w-[450px] relative">
          {/* THE TRACK (Animated Line) */}
          <div className="flex flex-col items-center py-2 relative">
            {/* Background Track Line */}
            <div className="absolute top-0 bottom-0 w-[1px] bg-white/5" />

            {/* Animated Progress Line */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute top-0 w-[1px] bg-gradient-to-b from-[#F3BE68] to-red-500"
            />

            {[...Array(5)].map((_, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.4, duration: 0.5 }}
                  className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 z-10 bg-[#080808] 
                    ${i >= 3 ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]" : "border-[#F3BE68]"}`}
                />
                {i !== 4 && <div className="h-16 md:h-20" />}
              </React.Fragment>
            ))}
          </div>

          {/* TEXT STEPS */}
          <div className="flex flex-col justify-between py-1">
            <Step
              delay={0}
              title="Invoice Date"
              desc="FX rate agreed in contract"
            />
            <Step
              delay={0.4}
              title="Shipment Departs"
              desc="Goods leave origin port"
            />
            <Step
              delay={0.8}
              title="Shipment Arrives"
              desc="Confirmed at destination"
            />
            <Step
              delay={1.2}
              isWarning
              title="7-Day Payment Delay"
              desc="Documentation & customs clearing"
            />
            <Step
              delay={1.6}
              isWarning
              title="Final Settlement"
              desc="The peak of the rate shock"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ title, desc, delay, isWarning }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col gap-1 h-16 md:h-20 justify-center"
    >
      <h3
        className={`font-bold text-[18px] md:text-[22px] leading-tight ${isWarning ? "text-red-500" : "text-[#C29241]"}`}
      >
        {title}
      </h3>
      <p className="text-[#D3C4B2]/50 text-[13px] md:text-[15px] leading-tight font-medium">
        {desc}
      </p>
    </motion.div>
  );
}
