import React from "react";

const Bottle = ({ colors, iconStroke }) => (
  <svg
    id="icon-bottle"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M42.5,20.7c0.4,0.6,0.6,1.3,0.6,2v36.8c0,1.1-0.9,2-2,2H22.9c-1.1,0-2-0.9-2-2V22.7c0-0.7,0.2-1.5,0.6-2.1l5-7.9
	c0.3-0.5,0.4-1,0.4-1.6V9h10.4v2.2c0,0.5,0.1,1.1,0.4,1.5L42.5,20.7z"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="26"
      y1="29.4"
      x2="26"
      y2="56.3"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M37.5,9h-11c-0.6,0-1-0.4-1-1V4.5c0-0.6,0.4-1,1-1h11c0.6,0,1,0.4,1,1V8C38.5,8.5,38.1,9,37.5,9z"
    />
  </svg>
);

export default Bottle;
