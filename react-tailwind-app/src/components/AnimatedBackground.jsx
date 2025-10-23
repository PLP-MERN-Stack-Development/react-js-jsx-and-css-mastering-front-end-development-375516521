import React, { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // 🌧️ Generate raindrops
    for (let i = 0; i < 40; i++) {
      const drop = document.createElement("div");
      drop.className = "raindrop";
      drop.style.left = Math.random() * 100 + "vw";
      drop.style.animationDuration = 0.5 + Math.random() * 0.8 + "s";
      drop.style.animationDelay = Math.random() * 5 + "s";
      container.appendChild(drop);
    }

    // 🌠 Generate comets
    for (let i = 0; i < 4; i++) {
      const comet = document.createElement("div");
      comet.className = "comet";
      comet.style.top = Math.random() * 80 + "vh";
      comet.style.left = Math.random() * 100 + "vw";
      comet.style.animationDelay = Math.random() * 6 + "s";
      container.appendChild(comet);
    }

    return () => (container.innerHTML = ""); // cleanup
  }, []);

  return (
    <div
      ref={containerRef}
      className="animated-bg fixed inset-0 -z-10 overflow-hidden"
    />
  );
}
