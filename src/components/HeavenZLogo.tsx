import React from 'react';

interface HeavenZLogoProps {
  variant?: 'header' | 'footer' | 'signboard' | 'compact' | 'hero';
  className?: string;
  showTagline?: boolean;
  showSlogan?: boolean;
}

export const HeavenZLogo: React.FC<HeavenZLogoProps> = ({
  variant = 'header',
  className = '',
  showTagline = true,
  showSlogan = false,
}) => {
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <svg
          viewBox="0 0 48 48"
          className="w-9 h-9 shrink-0 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="10" fill="#211568" />
          <path
            d="M 8 16 C 18 8, 30 8, 40 16"
            stroke="#FFC629"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="24"
            y="33"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="18"
            fontWeight="900"
            fill="#FFFFFF"
            textAnchor="middle"
          >
            H<tspan fill="#FFC629">Z</tspan>
          </text>
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-display font-extrabold text-lg text-white tracking-tight">
            Heaven<span className="text-[#FFC629]">Z</span>
          </span>
          {showTagline && (
            <span className="text-[9px] tracking-wider font-semibold text-[#FFC629] uppercase">
              Cafe · Okara
            </span>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'signboard') {
    return (
      <div className={`relative max-w-xl mx-auto ${className}`}>
        {/* Exterior Signboard Frame mimicking the physical cafe signage */}
        <div className="relative rounded-2xl bg-[#211568] p-5 sm:p-7 border-2 border-[#FFC629] shadow-2xl overflow-hidden text-center">
          {/* Signboard golden vertical end-caps */}
          <div className="absolute top-0 bottom-0 left-0 w-3 sm:w-4 bg-gradient-to-r from-[#FFC629] to-[#E5A600]" />
          <div className="absolute top-0 bottom-0 right-0 w-3 sm:w-4 bg-gradient-to-l from-[#FFC629] to-[#E5A600]" />

          {/* Golden overhead accent glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-[#FFC629]/15 blur-2xl pointer-events-none" />

          {/* Distinctive overhead curved golden arc */}
          <div className="flex justify-center mb-1">
            <svg
              viewBox="0 0 280 44"
              className="w-48 sm:w-64 h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="signboardGold" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFE885" />
                  <stop offset="50%" stopColor="#FFC629" />
                  <stop offset="100%" stopColor="#E5A600" />
                </linearGradient>
              </defs>
              <path
                d="M 20 36 C 85 8, 195 8, 260 36"
                stroke="url(#signboardGold)"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M 50 38 C 100 16, 180 16, 230 38"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <polygon
                points="140,8 143,14 149,17 143,20 140,26 137,20 131,17 137,14"
                fill="url(#signboardGold)"
              />
            </svg>
          </div>

          {/* Main HeavenZ Wordmark with capital Z */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
            Heaven<span className="text-[#FFC629]">Z</span>{' '}
            <span className="text-2xl sm:text-3xl font-semibold text-[#FFFDF7] tracking-normal">
              Cafe
            </span>
          </h1>

          {/* Tagline */}
          <div className="mt-2 text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FFC629] uppercase drop-shadow-sm">
            “Real Taste of Chicken”
          </div>

          {showSlogan && (
            <div className="mt-3 pt-3 border-t border-white/10 text-xs sm:text-sm italic text-[#FFFDF7]/90 font-medium">
              “Quality is our major ingredient”
            </div>
          )}
        </div>
      </div>
    );
  }

  // Header or Footer variant (clean vector layout with overhead golden curved swoosh)
  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Overhead curved golden line */}
      <svg
        viewBox="0 0 160 26"
        className="w-28 sm:w-36 h-auto -mb-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`goldArc-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE885" />
            <stop offset="50%" stopColor="#FFC629" />
            <stop offset="100%" stopColor="#E5A600" />
          </linearGradient>
        </defs>
        <path
          d="M 10 20 C 45 4, 115 4, 150 20"
          stroke={`url(#goldArc-${variant})`}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex items-baseline gap-1.5 leading-none">
        <span
          className={`font-display font-extrabold tracking-tight ${
            variant === 'footer' ? 'text-2xl text-white' : 'text-2xl sm:text-3xl text-white'
          }`}
        >
          Heaven<span className="text-[#FFC629]">Z</span>
        </span>
        <span className="font-display font-medium text-sm sm:text-base text-[#FFFDF7]/90">
          Cafe
        </span>
      </div>

      {showTagline && (
        <span
          className={`font-semibold tracking-[0.18em] uppercase ${
            variant === 'footer'
              ? 'text-[10px] text-[#FFC629] mt-1'
              : 'text-[9.5px] sm:text-[10.5px] text-[#FFC629] mt-1'
          }`}
        >
          Real Taste of Chicken
        </span>
      )}
    </div>
  );
};
