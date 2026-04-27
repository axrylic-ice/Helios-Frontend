"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../icons/Logo";

export default function SignIn() {
  return (
    <div className="w-full min-h-screen bg-[#050505] flex flex-col md:flex-row overflow-hidden font-sans h-dvh">
      {/* LEFT SIDE: VISUAL COVER (Strategic Positioning) */}
      <div className="hidden md:block w-[40%] lg:w-[50%] relative bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505] z-10" />
        <Image
          src="/cover_bg.png"
          fill
          className="object-cover opacity-60"
          alt="Intelligence Visualization"
        />

        {/* Logo Overlay for Left Side */}
        <div className="absolute top-10 left-10 z-20 flex items-center gap-2">
          <Link href="/">
            <Logo className="cursor-pointer h-8 w-8" />
          </Link>
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[18px] md:text-[20px] leading-none tracking-[-1px]">
              Fotuna
            </div>
            <div className="text-[#F6F3EA]/60 text-[8px] md:text-[10px] uppercase tracking-[1px] whitespace-nowrap mt-1">
              FX Decision Intelligence
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 left-12 z-20 max-w-sm">
          <p className="text-[#C29241] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
            Secure Portal
          </p>
          <h2 className="text-white/80 text-2xl font-light leading-snug">
            Access the Decision Intelligence Engine.
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE: AUTH FORM */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-12 relative z-10 bg-[#050505]"
      >
        <div className="w-full max-w-[400px] flex flex-col gap-8">
          <div>
            <h1 className="text-white text-[32px] md:text-[40px] font-semibold tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-white/40 text-sm">
              Please enter your details to sign in to your account.
            </p>
          </div>

          {/* Form Card */}
          <div className="w-full bg-[rgba(20,20,20,0.6)] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-10 flex flex-col gap-6 shadow-2xl">
            <div className="flex flex-col gap-2">
              <label className="text-white/50 text-[11px] uppercase tracking-widest font-bold px-1">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="h-[52px] px-5 rounded-[16px] bg-white/[0.03] border border-white/10 text-white focus:border-[#C29241]/50 transition-all outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between px-1">
                <label className="text-white/50 text-[11px] uppercase tracking-widest font-bold">
                  Password
                </label>
                <span className="text-[#C29241] text-[11px] cursor-pointer hover:underline">
                  Forgot?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••••••"
                className="h-[52px] px-5 rounded-[16px] bg-white/[0.03] border border-white/10 text-white focus:border-[#C29241]/50 transition-all outline-none"
              />
            </div>

            <Link href={"/dashboard"} className="flex w-full h-full ">
              {" "}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="h-[56px] mt-2 rounded-[16px] w-full bg-[#C29241] text-black font-bold text-[16px] shadow-lg shadow-[#C29241]/20 hover:bg-[#d4a352] transition-all"
              >
                Sign In
              </motion.button>
            </Link>

            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                Or
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            <div className="flex gap-3">
              <SocialButton label="Google" />
              <SocialButton label="Apple" />
            </div>
          </div>

          <p className="text-center text-white/40 text-sm">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#C29241] font-semibold hover:underline"
            >
              Create account
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function SocialButton({ label }) {
  return (
    <button className="flex-1 h-[48px] rounded-[16px] border border-white/10 bg-white/[0.02] text-white/70 text-sm font-medium hover:bg-white/[0.05] transition-all">
      {label}
    </button>
  );
}
