import React from "react";

const Bowl = ({ colors, iconStroke }) => (
  <svg
    id="icon-bowl"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M59.3,36.3C59.3,49.9,47.1,61,32,61S4.7,49.9,4.7,36.3"
    />
    <rect
      x="4.7"
      y="27"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="54.6"
      height="9.2"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="34.8"
      y1="27"
      x2="41.7"
      y2="3"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="53.2"
      y1="3.4"
      x2="43.6"
      y2="27"
    />
  </svg>
);

export default Bowl;
