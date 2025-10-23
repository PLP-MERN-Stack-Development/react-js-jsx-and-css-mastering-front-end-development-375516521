import React from "react";

export default function DemoCard() {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow p-6
                 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
                 text-gray-800 dark:text-gray-100 animate-fadeIn"
    >
      <h2 className="text-xl font-bold mb-2 text-center">
        Responsive Demo Card
      </h2>

      <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-4 text-center">
        This card demonstrates Tailwind v4 features: dark mode, responsiveness, and animation.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Primary
        </button>
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          Secondary
        </button>
      </div>
    </div>
  );
}
