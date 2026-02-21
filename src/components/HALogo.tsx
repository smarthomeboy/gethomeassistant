const HALogo = ({ className = "w-10 h-10", color = "currentColor" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 240 240" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House shape */}
    <path
      d="M120 20L30 100V210C30 215.523 34.477 220 40 220H200C205.523 220 210 215.523 210 210V100L120 20Z"
      fill={color}
      opacity="0.15"
    />
    <path
      d="M120 20L30 100V210C30 215.523 34.477 220 40 220H200C205.523 220 210 215.523 210 210V100L120 20Z"
      stroke={color}
      strokeWidth="8"
      strokeLinejoin="round"
    />
    {/* Circuit lines inside */}
    <circle cx="120" cy="130" r="8" fill={color} />
    <line x1="120" y1="138" x2="120" y2="190" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <line x1="120" y1="160" x2="80" y2="185" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <line x1="120" y1="160" x2="160" y2="185" stroke={color} strokeWidth="6" strokeLinecap="round" />
    <circle cx="80" cy="185" r="6" fill={color} />
    <circle cx="160" cy="185" r="6" fill={color} />
    <circle cx="120" cy="190" r="6" fill={color} />
  </svg>
);

export default HALogo;
