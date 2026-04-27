"use client";
import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom"; // Add this
import { motion, AnimatePresence } from "framer-motion";

export default function InfoOverlay({ isOpen, onClose, data }) {
  const [mounted, setMounted] = useState(typeof window !== "undefined");

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Prevent SSR errors during the hackathon build
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // fixed inset-0 + w-screen + h-dvh ensures it covers EVERYTHING
          className="fixed inset-0 z-[9999] w-screen h-dvh flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            // Fixed width + max-width prevents it from breaking "out of bounds"
            className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-[32px] p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-[#C29241]/10 rounded-2xl border border-[#C29241]/20">
                <div className="w-6 h-6 text-[#C29241]">📊</div>
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {data?.title || "Intelligence Detail"}
            </h3>
            <p className="text-[#C29241] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              Indicator Importance: {data?.weight || "High"}
            </p>

            <div className="space-y-8 text-left">
              <section>
                <h4 className="text-white/30 text-[10px] uppercase font-black mb-3 tracking-widest">
                  How it works
                </h4>
                <p className="text-[#D3C4B2] text-sm leading-relaxed antialiased">
                  {data?.mechanism}
                </p>
              </section>

              <section className="p-5 bg-white/[0.03] rounded-2xl border border-white/5">
                <h4 className="text-white/30 text-[10px] uppercase font-black mb-3 tracking-widest">
                  Current Signal
                </h4>
                <p className="text-white text-sm font-medium leading-relaxed">
                  {data?.signalEffect}
                </p>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // This teleports the modal to the body so it can't be "cut off" by dashboard containers
  return createPortal(modalContent, document.body);
}
