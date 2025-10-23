import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import AnimatedBackground from "./AnimatedBackground";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Animation */}
      <AnimatedBackground />

      {/* Main App Content */}
      <div className="relative z-10 flex flex-col min-h-screen bg-gray-100/70 dark:bg-gray-950/70 backdrop-blur-sm transition-colors duration-300">
        <Navbar />
        <main className="flex-grow container mx-auto p-6 animate-fadeIn">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
