import React from "react";
import { Separator } from "@/components/ui/Separator";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>

        {/* Links with separators */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Privacy
          </a>

          {/* Vertical separator */}
          <Separator className="h-4 border-l border-gray-300 dark:border-gray-700" />

          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Terms
          </a>

          <Separator className="h-4 border-l border-gray-300 dark:border-gray-700" />

          <a href="#" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
