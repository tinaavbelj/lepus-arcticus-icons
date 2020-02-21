import React from "react";

const ShoppingBag = ({ colors, iconStroke }) => (
  <svg
    id="icon-shoppingBag"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <g>
      <path
        fill={colors.primary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="
		M53.9,59.5c0,0.8-0.6,1.5-1.4,1.5H11c-0.8,0-1.5-0.7-1.4-1.5L12.3,17c0-0.8,0.7-1.5,1.6-1.5h35.8c0.8,0,1.5,0.7,1.6,1.5L53.9,59.5z
		"
      />
    </g>
    <circle
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="22.2"
      cy="25.5"
      r="3"
    />
    <circle
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="41.1"
      cy="25.5"
      r="3"
    />
    <g>
      <g>
        <path
          fill="none"
          stroke={colors.stroke}
          strokeWidth={iconStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="
			M22.5,11.3c0-5.1,4.1-9.3,9.3-9.3S41,6.1,41,11.3v11.2"
        />

        <line
          fill="none"
          stroke={colors.stroke}
          strokeWidth={iconStroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="22.5"
          y1="11.3"
          x2="22.5"
          y2="22.5"
        />
      </g>
    </g>
  </svg>
);

export default ShoppingBag;
