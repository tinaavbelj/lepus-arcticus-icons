import React from "react";

const Letter = ({ colors, iconStroke }) => (
  <svg
    id="icon-letter"
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
  </svg>
);

export default Letter;
