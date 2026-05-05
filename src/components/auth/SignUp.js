"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "../icons/Logo";
const API_BASE = "https://helios-backend-966417183733.us-central1.run.app";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Min 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validate()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          company_name: formData.name,
          country: "NG",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // backend validation / error handling
        setErrors({
          email: data.message || "Signup failed",
        });
        return;
      }

      // 🔐 STORE TOKEN (THIS IS YOUR SESSION)
      localStorage.setItem("token", data.token);

      // optional: store user too
      localStorage.setItem("user", JSON.stringify(data.data.user));

      // redirect after successful auth
      router.push("/app/dashboard");
    } catch (err) {
      console.error(err);
      setErrors({ email: "Server error. Try again." });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] flex flex-col md:flex-row relative overflow-x-hidden font-sans">
      {/* FLOATING HEADER */}
      <div className="absolute left-4 right-4 top-6 flex items-center justify-between z-30 md:left-6 md:top-8 md:justify-start md:gap-3">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-7 h-7 md:w-8 md:h-8 transition-transform group-hover:scale-110" />
          <div className="flex flex-col justify-center">
            <div className="text-[#C29241] font-bold text-[16px] md:text-[20px] leading-none tracking-[-1px]">
              Fotuna
            </div>
            <div className="hidden xs:block text-[#F6F3EA]/60 text-[7px] md:text-[10px] uppercase tracking-[1px] mt-1">
              FX Decision Intelligence
            </div>
          </div>
        </Link>

        <Link href="/login" className="md:absolute md:right-0 md:top-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-[12px] md:text-sm font-medium backdrop-blur-md"
          >
            Log In
          </motion.button>
        </Link>
      </div>

      {/* FORM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 flex flex-col justify-center items-center px-5 sm:px-8 md:px-12 lg:px-24 pt-32 pb-12 md:pt-20 relative z-10"
      >
        <div className="w-full max-w-[420px] flex flex-col gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-white text-[28px] xs:text-[32px] md:text-[42px] font-semibold tracking-tight mb-2">
              Get Started
            </h1>
            <p className="text-white/40 text-sm">
              Join the network and start mitigating FX risks today.
            </p>
          </div>

          <motion.form
            onSubmit={handleSignUp}
            animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
            className="w-full p-6 sm:p-8 md:p-10 rounded-[24px] md:rounded-[32px] bg-[rgba(20,20,20,0.6)] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-4"
          >
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              error={errors.name}
              onChange={(val) => setFormData({ ...formData, name: val })}
            />
            <Input
              label="Email"
              placeholder="john@fotuna.ai"
              value={formData.email}
              error={errors.email}
              onChange={(val) => setFormData({ ...formData, email: val })}
            />
            <Input
              label="Password"
              placeholder="••••••••••••"
              type="password"
              value={formData.password}
              error={errors.password}
              onChange={(val) => setFormData({ ...formData, password: val })}
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="h-[52px] md:h-[56px] mt-2 md:mt-4 rounded-[14px] md:rounded-[16px] w-full bg-[#C29241] text-black font-bold text-[16px] shadow-lg shadow-[#C29241]/20 hover:bg-[#d4a352] transition-all"
            >
              Create Account
            </motion.button>

            <div className="flex items-center gap-4 py-1 md:py-2">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                Or
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="flex gap-3 md:gap-4">
              <SocialButton label="Google" type="google" />
              <SocialButton label="Apple" type="apple" />
            </div>
          </motion.form>

          <p className="text-center text-white/40 text-[11px] md:text-xs px-4 leading-relaxed">
            By creating an account, you agree to our
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">
              Terms
            </span>{" "}
            and
            <span className="text-white/60 mx-1 cursor-pointer hover:text-[#C29241]">
              Privacy Policy
            </span>
            .
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
          className="object-cover opacity-60 grayscale-[0.3]"
        />

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

function Input({ label, placeholder, type = "text", value, onChange, error }) {
  const [isVisible, setIsVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center px-1">
        <label className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-widest font-bold">
          {label}
        </label>
        {error && (
          <span className="text-red-500 text-[9px] md:text-[10px] uppercase font-black">
            {error}
          </span>
        )}
      </div>
      <div className="relative w-full">
        <input
          type={isPassword ? (isVisible ? "text" : "password") : type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-[48px] md:h-[52px] px-4 md:px-5 rounded-[12px] md:rounded-[16px] bg-white/[0.03] border ${error ? "border-red-500/40" : "border-white/10"} text-white text-sm outline-none focus:border-[#C29241]/50 transition-all ${isPassword ? "pr-12" : ""}`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/60 transition-colors text-[10px] uppercase font-bold tracking-tighter"
          >
            {isVisible ? "Hide" : "Show"}
          </button>
        )}
      </div>
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
    ),
  };

  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 h-[44px] md:h-[48px] rounded-[12px] md:rounded-[16px] border border-white/10 bg-white/[0.02] text-white/80 text-xs md:text-sm font-medium hover:bg-white/10 transition-colors"
    >
      {icons[type]}
      {label}
    </button>
  );
}
