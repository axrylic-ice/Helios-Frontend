"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import InfoOverlay from "./InfoOverlay";

export default function EngineCard({ children, details, title }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left - 50, y: e.clientY - rect.top - 50 });
  };

  return (
    <>
      <div
        className="relative group w-full"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowOverlay(true)}
      >
        {/* The Card UI */}
        <div className="cursor-pointer border border-white/10 backdrop-blur-xl rounded-2xl p-6 h-[270px] flex flex-col hover:border-[#F3BE68]/40 transition-all bg-white/[0.02] hover:bg-white/[0.05]">
          {children}
        </div>

        {/* The Snappy Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className="pointer-events-none absolute z-[100] hidden md:block"
              style={{
                left: coords.x,
                top: coords.y,
                transform: "translate(-50%, -140%)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="relative bg-[#F3BE68]/10 text-[#F3BE68] text-[10px] font-black px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap ">
                Click for more info
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#F3BE68]/20" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Using your separate InfoOverlay component */}
      <InfoOverlay
        isOpen={showOverlay}
        onClose={() => setShowOverlay(false)}
        data={{ title, ...details }}
      />
    </>
  );
}
