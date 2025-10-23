import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto p-6 animate-fadeIn">
        {children}
      </main>
      <Footer />
    </div>
  );
}
