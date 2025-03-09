import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      transition: { duration: 1.5 },
    });
  }, [controls]);

  return (
    <motion.div
      className="fixed inset-0 z-[-1] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {/* Noisy Gradient Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      ></div>

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-emerald-100 opacity-60"></div>

      {/* Stars Layer */}
      <div className="stars"></div>

      {/* Glowing Moon */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-amber-100 rounded-full shadow-[0_0_20px_5px_rgba(251,191,36,0.3)] animate-pulse"></div>

      {/* Islamic Pattern Overlay */}
      <div
        className="absolute inset-0 bg-repeat opacity-[0.05]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606076155886-30bab6168e3c?q=80&w=2069&auto=format&fit=crop')",
        }}
      ></div>
    </motion.div>
  );
};

export default AnimatedBackground;
