"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../icons/Logo";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Min 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (validate()) {
      router.push("/dashboard");
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] flex flex-col md:flex-row relative overflow-hidden font-sans h-dvh">
      {/* FLOATING HEADER */}
      <div className="absolute left-6 top-8 flex items-center gap-3 z-30">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 transition-transform group-hover:scale-110" />
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[18px] md:text-[20px] leading-none tracking-[-1px]">Fotuna</div>
            <div className="text-[#F6F3EA]/60 text-[8px] md:text-[10px] uppercase tracking-[1px] mt-1">FX Decision Intelligence</div>
          </div>
        </Link>
      </div>

      <div className="absolute right-6 top-8 z-30">
        <Link href="/login">
          <motion.button whileHover={{ scale: 1.05 }} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium backdrop-blur-md hover:bg-white/10">
            Log In
          </motion.button>
        </Link>
      </div>

      {/* FORM SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 pt-20 relative z-10"
      >
        <div className="w-full max-w-[420px] flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-white text-[32px] md:text-[42px] font-semibold tracking-tight mb-2">Get Started</h1>
            <p className="text-white/40 text-sm">Join the network and start mitigating FX risks today.</p>
          </div>

          <motion.form 
            onSubmit={handleSignUp}
            animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
            className="w-full p-8 md:p-10 rounded-[32px] bg-[rgba(20,20,20,0.6)] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-4"
          >
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              value={formData.name}
              error={errors.name}
              onChange={(val) => setFormData({...formData, name: val})}
            />
            <Input 
              label="Email" 
              placeholder="john@fotuna.ai" 
              value={formData.email}
              error={errors.email}
              onChange={(val) => setFormData({...formData, email: val})}
            />
            <Input
              label="Password"
              placeholder="••••••••••••"
              type="password"
              value={formData.password}
              error={errors.password}
              onChange={(val) => setFormData({...formData, password: val})}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="h-[56px] mt-4 rounded-[16px] w-full bg-[#C29241] text-black font-bold text-[16px] shadow-lg shadow-[#C29241]/20 hover:bg-[#d4a352] transition-all"
            >
              Create Account
            </motion.button>

            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Or</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="flex gap-4">
              <SocialButton label="Google" />
              <SocialButton label="Apple" />
            </div>
          </motion.form>

          <p className="text-center text-white/40 text-xs px-6 leading-relaxed">
            By creating an account, you agree to our 
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">Terms</span> and 
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">Privacy Policy</span>.
          </p>
        </div>
      </motion.div>

      {/* VISUAL SECTION */}
      <div className="hidden md:block w-[45%] lg:w-[50%] h-screen sticky top-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505] z-10" />
        <Image 
          src="/cover_bg.png"
          alt="Intelligence Visualization"
          fill
          priority
          sizes="50vw"
          className="object-cover opacity-60 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
        />

        <div className="absolute bottom-16 left-16 right-16 z-20">
          <div className="h-px w-12 bg-[#C29241] mb-6" />
          <h2 className="text-white/70 text-xl font-light leading-relaxed tracking-wide italic">
            &quot;The future of finance isn&apos;t just about data—it&apos;s about the intelligence that acts on it.&quot;
          </h2>
        </div>
      </div>
    </div>
  );
}

function Input({ label, placeholder, type = "text", value, onChange, error }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center px-1">
        <label className="text-white/40 text-[11px] uppercase tracking-widest font-bold">{label}</label>
        {error && <span className="text-red-500 text-[10px] uppercase font-black">{error}</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`h-[52px] px-5 rounded-[16px] bg-white/[0.03] border ${error ? 'border-red-500/40' : 'border-white/10'} text-white outline-none focus:border-[#C29241]/50 transition-all`}
      />
    </div>
  );
}

function SocialButton({ label }) {
  return (
    <button type="button" className="flex-1 h-[48px] rounded-[16px] border border-white/10 bg-white/[0.02] text-white/80 text-sm font-medium hover:bg-white/10 transition-colors">
      {label}
    </button>
  );
}