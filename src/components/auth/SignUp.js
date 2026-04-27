"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "../icons/Logo";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen bg-[#050505] flex flex-col md:flex-row relative overflow-hidden font-sans h-dvh">
      {/* FLOATING HEADER ELEMENTS */}
      <div className="absolute left-6 top-8 flex items-center gap-3 z-30">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 transition-transform group-hover:scale-110" />
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[18px] md:text-[20px] leading-none tracking-[-1px]">
              Fotuna
            </div>
            <div className="text-[#F6F3EA]/60 text-[8px] md:text-[10px] uppercase tracking-[1px] whitespace-nowrap mt-1">
              FX Decision Intelligence
            </div>
          </div>
        </Link>
      </div>

      <div className="absolute right-6 top-8 z-30">
        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            Log In
          </motion.button>
        </Link>
      </div>

      {/* LEFT FORM SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-20 relative z-10"
      >
        <div className="w-fit max-w-[420px] flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-white text-[32px] md:text-[42px] font-semibold tracking-tight mb-2">
              Get Started
            </h1>
            <p className="text-white/40 text-sm">
              Join the network and start mitigating FX risks today.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="w-full p-8 md:p-10 rounded-[32px] bg-[rgba(20,20,20,0.6)] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-4">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" placeholder="john@fotuna.ai" />
            <Input
              label="Password"
              placeholder="••••••••••••"
              type="password"
            />

            <Link href={"/dashboard"} className="flex w-full h-full ">
              {" "}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="h-[56px] mt-2 rounded-[16px] w-full bg-[#C29241] text-black font-bold text-[16px] shadow-lg shadow-[#C29241]/20 hover:bg-[#d4a352] transition-all"
              >
                Create Account
              </motion.button>
            </Link>

            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                Or
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="flex gap-4">
              <SocialButton label="Google" />
              <SocialButton label="Apple" />
            </div>
          </div>

          <p className="text-center text-white/40 text-xs px-6 leading-relaxed">
            By creating an account, you agree to our
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">
              Terms of Service
            </span>
            and
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">
              Privacy Policy
            </span>
            .
          </p>
        </div>
      </motion.div>

      {/* RIGHT VISUAL SECTION */}
      <div className="hidden md:block w-[45%] lg:w-[50%] h-screen sticky top-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505] z-10" />
        <div
          className="w-full h-full opacity-60 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
          style={{
            backgroundImage: "url('/cover_bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Decorative Quote */}
        <div className="absolute bottom-16 left-16 right-16 z-20">
          <div className="h-px w-12 bg-[#C29241] mb-6" />
          <h2 className="text-white/70 text-xl font-light leading-relaxed tracking-wide italic">
            &quot;The future of finance isn&apos;t just about data—it&apos;s
            about the intelligence that acts on it.&quot;
          </h2>
        </div>
      </div>
    </div>
  );
}

/* ---------------- REFINED COMPONENTS ---------------- */

function Input({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white/40 text-[11px] uppercase tracking-widest font-bold ml-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-[52px] px-5 rounded-[16px] bg-white/[0.03] border border-white/10 text-white outline-none focus:border-[#C29241]/50 focus:bg-white/[0.05] transition-all placeholder:text-white/10"
      />
    </div>
  );
}

function SocialButton({ label }) {
  return (
    <button className="flex-1 h-[48px] rounded-[16px] border border-white/10 bg-white/[0.02] text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">
      {label}
    </button>
  );
}
