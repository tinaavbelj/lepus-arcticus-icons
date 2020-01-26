import React from "react";

const LetterHeart = ({ colors, iconStroke }) => (
  <svg
    id="icon-letterHeart"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <rect
      x="3"
      y="10.5"
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="58.3"
      height="43.8"
    />
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	61.3,10.5 32.2,39.7 3,10.5 "
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="3"
      y1="54.4"
      x2="24.9"
      y2="32.5"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="61.3"
      y1="54.4"
      x2="39.4"
      y2="32.5"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M32.3,28.9c0.7-2.3,2.9-3.9,5.3-3.9c3,0,5.5,2.5,5.5,5.5c0,1-0.3,2-0.8,2.7l0,0l-0.1,0.3c-0.1,0.3-0.4,0.5-0.7,0.8L32.2,44l-9.4-9.8
	c-0.3-0.3-0.4-0.5-0.7-0.8L22,33.3l0,0c-0.5-0.8-0.8-1.8-0.8-2.7c0-3,2.5-5.5,5.5-5.5C29.3,25,31.5,26.5,32.3,28.9"
    />
  </svg>
);

export default LetterHeart;
