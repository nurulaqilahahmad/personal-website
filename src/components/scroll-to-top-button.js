import React, { useState, useEffect } from "react";
import './scroll-to-top-button.css';
import { IoIosArrowUp } from "react-icons/io";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event to toggle visibility of the button
  const handleScroll = () => {
    const scrolled = window.scrollY;
    setIsVisible(scrolled > 300); // Show button when scrolled down 300px
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Attach and detach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="scrollToTopBtn"
          onClick={scrollToTop}
        >
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};