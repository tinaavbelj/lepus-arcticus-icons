import React from "react";

const Palette = ({ colors, iconStroke }) => (
  <svg
    id="icon-palette"
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
      strokeMiterlimit="10"
      d="
	M59.7,35.5c-1.6,15.7-17,26.5-32.2,25.4c-1.3-0.1-2.7-0.2-3.7-1.1c-1-0.9-1.3-2.4-1.2-3.7c0.4-5.1,4.5-12.2,1.9-17.3
	c-1.5-2.9-5-2.8-8.1-3.5c-3.1-0.7-6.4-0.9-9.2-2.3c-1-0.5-2-1.3-2.5-2.3c-0.6-1.2-0.6-2.6-0.3-4C6.9,12.6,18.2,1.6,33.3,3.1
	C49.5,4.8,61.3,19.3,59.7,35.5z"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 -9.2487 38.8075)"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="16.8"
      cy="24.5"
      rx="4.6"
      ry="4.6"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 9.0019 40.5824)"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="26.9"
      cy="15.3"
      rx="4.6"
      ry="4.6"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 20.8502 54.1826)"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="40.4"
      cy="15.6"
      rx="4.6"
      ry="4.6"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 17.0176 72.1173)"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="48.4"
      cy="26.7"
      rx="4.6"
      ry="4.6"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 2.2037 83.0352)"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="47"
      cy="40.3"
      rx="4.6"
      ry="4.6"
    />
    <ellipse
      transform="matrix(0.1 -0.995 0.995 0.1 -16.0558 80.2373)"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="36.3"
      cy="49"
      rx="4.6"
      ry="4.6"
    />
  </svg>
);

export default Palette;
