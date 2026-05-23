"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../icons/Logo";

const API_BASE =
  "https://helios-backend-nf3l.onrender.com";

export default function SignIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Min 6 chars";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSignIn = async (e) => {
  e.preventDefault();

  if (!validate()) {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrors({
        email: data.message || "Login failed",
      });
      return;
    }

    // store session
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));

    router.push("/app/dashboard");

  } catch (err) {
    console.error(err);
    setErrors({ email: "Server error. Try again." });
  }
};

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full overflow-x-hidden bg-[#050505] font-sans">
      
      {/* MOBILE LOGO HEADER */}
      <div className="flex items-center gap-2 p-6 md:hidden">
        <Link href="/"><Logo className="h-7 w-7" /></Link>
        <span className="text-[#C29241] font-bold text-lg tracking-tighter">Fotuna</span>
      </div>

      {/* VISUAL COVER */}
      <div className="hidden md:relative md:block md:w-[40%] lg:w-[50%] bg-[#0A0A0A]">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-[#050505]" />
        <Image
          src="/cover_bg.png"
          fill
          className="object-cover opacity-60"
          alt="Intelligence Visualization"
          sizes="50vw"
          priority
        />
        
        <div className="absolute top-10 left-10 z-20 flex items-center gap-2">
          <Link href="/"><Logo className="cursor-pointer h-8 w-8" /></Link>
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[20px] leading-none tracking-[-1px]">Fotuna</div>
            <div className="text-[#F6F3EA]/60 text-[10px] uppercase tracking-[1px] mt-1">FX Decision Intelligence</div>
          </div>
        </div>

        <div className="absolute bottom-20 left-12 z-20 max-w-sm">
          <p className="text-[#C29241] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">Secure Portal</p>
          <h2 className="text-white/80 text-2xl font-light leading-snug">Access the Decision Intelligence Engine.</h2>
        </div>
      </div>

      {/* FORM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-1 flex-col items-center justify-center px-6 py-8 md:px-12 md:py-12 lg:px-20"
      >
        <div className="flex w-full max-w-[400px] flex-col gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">Welcome back</h1>
            <p className="text-sm text-white/40">Please enter your details to sign in.</p>
          </div>

          <motion.form 
            onSubmit={handleSignIn}
            animate={isShaking ? { x: [-8, 8, -8, 8, 0] } : { x: 0 }}
            className="flex w-full flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.02] p-6 backdrop-blur-2xl shadow-2xl md:rounded-[32px] md:p-10 md:gap-6"
          >
            {/* Email */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Email</label>
                {errors.email && <span className="text-[10px] font-bold text-red-500/80">{errors.email}</span>}
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="name@company.com"
                className="h-[52px] rounded-[14px] border border-white/10 bg-white/[0.03] px-5 text-white outline-none focus:border-[#C29241]/50 transition-all placeholder:text-white/20 md:rounded-[16px]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between px-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/50">Password</label>
                {errors.password && <span className="text-[10px] font-bold text-red-500/80">{errors.password}</span>}
              </div>
              <div className="relative">
                <input
                  type={isVisible ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••••••"
                  className="w-full h-[52px] rounded-[14px] border border-white/10 bg-white/[0.03] px-5 pr-14 text-white outline-none focus:border-[#C29241]/50 transition-all placeholder:text-white/20 md:rounded-[16px]"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible(!isVisible)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-tighter text-white/20 hover:text-white/60 transition-colors"
                >
                  {isVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="h-[56px] w-full rounded-[14px] bg-[#C29241] text-[16px] font-bold text-black shadow-lg shadow-[#C29241]/10 md:rounded-[16px]"
            >
              Sign In
            </motion.button>

            <div className="flex items-center gap-4 py-1">
              <div className="h-[1px] flex-1 bg-white/5" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">Or</span>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>

            <div className="flex gap-3">
              <SocialButton label="Google" type="google" />
              <SocialButton label="Apple" type="apple" />
            </div>
          </motion.form>

          <p className="text-center text-sm text-white/40">
            Don’t have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#C29241] hover:underline">Create account</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function SocialButton({ label, type }) {
  const icons = {
    google: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
    apple: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05 1.78-3.4 1.78-1.3 0-1.7-.82-3.23-.82-1.55 0-2.01.8-3.23.82-1.28.02-2.45-.92-3.43-2.31-2-2.85-2.43-7.22-.88-9.75 1.04-1.7 2.76-2.5 4.14-2.5 1.34 0 2.29.83 3.16.83.83 0 2.05-.83 3.49-.83 1.25 0 2.85.6 3.8 1.83-2.65 1.48-2.21 5.16.41 6.38-1.01 2.27-2.26 4.35-3.41 5.35zM12.03 5.19c-.04-1.83 1.48-3.55 3.19-4.19.22 2.15-1.57 4.19-3.19 4.19z" />
      </svg>
    )
  };

  return (
    <button 
      type="button" 
      className="flex-1 flex items-center justify-center gap-2 h-[48px] rounded-[14px] border border-white/5 bg-white/[0.02] text-xs font-medium text-white/60 hover:text-white hover:bg-white/[0.05] transition-all md:rounded-[16px]"
    >
      {icons[type]}
      {label}
    </button>
  );
}