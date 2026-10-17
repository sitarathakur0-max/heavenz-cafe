import React from 'react';
import { BUSINESS_INFO } from '../types.ts';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed left-6 bottom-6 z-50 group"
    >
      <a
        href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
          'Hello HeavenZ Cafe, I am visiting your website and would like to ask about your menu and services.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with HeavenZ Cafe on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC629]"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          className="drop-shadow-sm"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.97.57 3.885 1.646 5.532L2 22l4.613-1.603A9.99 9.99 0 0 0 12.031 22C17.568 22 22 17.506 22 12.029 22 6.494 17.568 2 12.031 2zm5.727 14.156c-.24.673-1.196 1.289-1.684 1.348-.466.057-1.07.085-3.418-.891-2.923-1.216-4.81-4.22-4.957-4.417-.146-.197-1.189-1.583-1.189-3.02 0-1.436.753-2.143 1.02-2.434.267-.29.582-.363.777-.363.195 0 .39.002.56.01.182.008.423-.069.662.504.246.59.842 2.054.914 2.203.073.148.121.325.024.52-.098.196-.146.318-.292.489-.146.17-.308.38-.44.51-.146.146-.299.307-.128.601.171.293.762 1.258 1.634 2.034 1.121.998 2.065 1.309 2.358 1.455.293.146.463.122.634-.073.171-.196.732-.852.927-1.144.195-.293.39-.244.659-.146.268.098 1.706.804 2 .95.293.146.488.219.561.341.073.122.073.708-.167 1.381z" />
        </svg>

        {/* Floating Tooltip visible on hover / focus */}
        <span
          className="pointer-events-none absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#211568] text-[#FFFDF7] text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-200 border border-[#FFC629]/40"
          role="tooltip"
        >
          Chat with HeavenZ Cafe on WhatsApp
        </span>
      </a>
    </aside>
  );
};
