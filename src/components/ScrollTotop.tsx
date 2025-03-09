import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpCircle } from "lucide-react"; // Using Lucide for the icon

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-emerald-900 text-[#D1BB8C] p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowUpCircle size={30} />
    </motion.button>
  );
};

export default ScrollToTopButton;
