import React from "react";

const Camera = ({ colors, iconStroke }) => (
  <svg
    id="icon-camera"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M58.8,17.9H45.3
	l-2.7-5.1c-0.4-0.7-1.1-1.2-2-1.2H23.3c-0.8,0-1.6,0.5-2,1.2l-2.7,5.1H5.2C4,17.9,3,19,3,20.2v30c0,1.2,1,2.2,2.2,2.2h53.5
	c1.2,0,2.2-1,2.2-2.2v-30C61,19,60,17.9,58.8,17.9z"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.2,17.9v-1.6
	c0-1.2-1-2.2-2.2-2.2H9.8c-1.2,0-2.2,1-2.2,2.2v1.6H16.2z"
    />
    <rect
      x="3"
      y="25.2"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="58"
      height="19.9"
    />
    <circle
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      cx="32"
      cy="34"
      r="13.3"
    />
  </svg>
);

export default Camera;
