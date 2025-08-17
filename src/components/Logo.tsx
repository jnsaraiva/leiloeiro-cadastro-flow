import React from 'react';

const Logo: React.FC = () => {
  return (
    <svg
      width="190"
      height="40"
      viewBox="0 0 190 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-auto"
    >
      {/* Icon */}
      <g>
        <rect width="40" height="40" rx="8" fill="hsl(var(--primary))" />
        <path
          d="M12 13H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 29V13"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Text */}
      <text
        fill="hsl(var(--foreground))"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x="52" y="28.5">Leilão</tspan>
      </text>
      <text
        fill="hsl(var(--primary))"
        xmlSpace="preserve"
        style={{ whiteSpace: 'pre' }}
        fontFamily="Inter, sans-serif"
        fontSize="24"
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x="135" y="28.5">Lovers</tspan>
      </text>
    </svg>
  );
};

export default Logo;
