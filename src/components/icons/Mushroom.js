import React from "react";

const Mushroom = ({ colors, iconStroke }) => (
  <svg
    id="icon-mushroom"
    width="64px"
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
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
	M57.6,28.7C60.4,13.5,46.2,3,32,3S3.1,13,6.3,28.7H57.6z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M39.6,28.7c1,6.3,2.4,11.1,3.5,17.4c1.4,8.1-2.4,16-11,16c-3.8,0-6.4-1.1-9-4.6c-3.2-4.4-2.3-9.4-1.3-14.2c0.9-4.2,1.2-7.2,2.1-11.4
	c0.2-1,0.4-2,0.7-3.1C24.5,28.7,39.6,28.7,39.6,28.7z"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M30.9,57.4c-0.5-0.1-0.9-0.3-1.3-0.5c-0.9-0.5-1.8-1.3-2.6-2.5c-2-2.7-1.8-5.7-1.2-8.7"
    />
  </svg>
);

export default Mushroom;
