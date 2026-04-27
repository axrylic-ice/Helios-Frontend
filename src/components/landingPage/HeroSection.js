"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-dvh overflow-hidden flex items-end justify-center pb-10 md:pb-20 px-4">
      {/* Background with Subtle Parallax Zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <Image
          src="/cover_bg.png"
          alt="Background"
          fill
          priority
          quality={[75,80]}
          className="object-cover" // Pushes it behind your content
          sizes="100vw"
        />
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1], // Custom "Anticipatory" ease
          delay: 0.2,
        }}
        className="relative z-20 
          w-full md:w-fit h-fit 
          max-w-full md:max-w-[800px] 
          bg-[rgba(8,8,8,0.25)] border border-[rgba(243,190,104,0.2)] 
          backdrop-blur-md rounded-3xl 
          flex flex-col items-center justify-center 
          gap-6 md:gap-8 
          px-6 py-10 md:px-12 md:py-12"
      >
        {/* Heading with Character Stagger */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="font-grotesk 
              text-[36px] leading-[1.1] 
              sm:text-[52px] 
              md:text-[72px] 
              tracking-[-0.05em] text-center 
              bg-gradient-to-b from-white to-[#CFAD72] bg-clip-text text-transparent"
          >
            Lose less money with our model
          </motion.h1>
        </div>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-inter 
            text-[15px] leading-relaxed 
            md:text-[20px] md:leading-[31px] 
            text-[#D3C4B2]/80 text-center 
            w-full max-w-[700px]"
        >
          Empowering businesses with an FX intelligence engine that turns market
          inefficiencies into strategic advantages through real-time arbitrage
          detection.
        </motion.p>

        {/* CTA with Glow/Scale Effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="p-[4px] md:p-[6px] border border-white/10 rounded-full group"
        >
          <Link href="/signup">
            {" "}
            <button
              className="
            px-8 py-3 md:px-10 md:py-[12px] 
            rounded-full bg-[#D3C4B2] text-black 
            font-bold font-inter text-base md:text-[18px]
            transition-all duration-300
            hover:bg-white hover:scale-[1.02]
            active:scale-95 whitespace-nowrap shadow-[0_0_20px_rgba(211,196,178,0.2)]"
            >
              Start for free
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Overlay to ground the card */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
