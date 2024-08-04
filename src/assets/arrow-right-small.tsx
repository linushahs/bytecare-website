import React from "react";

interface ArrowRightSmallIconProps extends React.SVGProps<SVGSVGElement> {
  fillGradient?: boolean;
  className?: string;
}

function ArrowRightSmallIcon({
  fillGradient,
  className,
  ...props
}: ArrowRightSmallIconProps) {
  return (
    <svg
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M6.5 12.1426H17.5M17.5 12.1426L12.9118 8.14258M17.5 12.1426L12.9118 16.1426"
        stroke={fillGradient ? "url(#paint0_linear_4242_3615)" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 12.1426H17.5M17.5 12.1426L12.9118 8.14258M17.5 12.1426L12.9118 16.1426"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {fillGradient && (
        <defs>
          <linearGradient
            id="paint0_linear_4242_3615"
            x1="12"
            y1="8.14258"
            x2="12"
            y2="16.1426"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#39B98D" />
            <stop offset="1" stopColor="#106648" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}

export default ArrowRightSmallIcon;
