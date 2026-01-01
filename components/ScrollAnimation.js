"use client";

import { useEffect } from "react";

export default function ScrollAnimation({ children, className = "" }) {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}

