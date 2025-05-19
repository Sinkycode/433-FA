import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // optional icon lib, or use emoji/svg

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-all"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    )
  );
};

export default BackToTopButton;
