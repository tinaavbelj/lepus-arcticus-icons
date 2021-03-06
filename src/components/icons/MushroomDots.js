import React from "react";

const MushroomDots = ({ colors, iconStroke }) => (
  <svg
    id="icon-mushroomDots"
    width="64px"
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M57.7,28.2C60.5,13,46.2,2.5,32,2.5S3.2,12.5,6.4,28.2H57.7z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M39.7,28.2c1,6.3,2.4,11.1,3.5,17.4c1.4,8.1-2.4,16-11,16c-3.8,0-6.4-1.1-9-4.6c-3.2-4.4-2.3-9.4-1.3-14.2c0.9-4.2,1.2-7.2,2.1-11.4
	c0.2-1,0.4-2,0.7-3.1C24.5,28.2,39.7,28.2,39.7,28.2z"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M31,56.9c-0.5-0.1-0.9-0.3-1.3-0.5c-0.9-0.5-1.8-1.3-2.6-2.5c-2-2.7-1.8-5.7-1.2-8.7"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M15.3,28.1c-0.1-0.3-0.1-0.6-0.1-1c0-3.4,2.8-6.2,6.2-6.2c3.4,0,6.2,2.8,6.2,6.2c0,0.3,0,0.6-0.1,1H15.3z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M42.3,28c-0.7-0.9-1-2-1-3.2c0-2.9,2.4-5.3,5.3-5.3c2.9,0,5.3,2.4,5.3,5.3c0,1.1-0.4,2.2-1,3.2H42.3z"
    />
    <circle
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="35.3"
      cy="12.4"
      r="4.5"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M19.9,12.2c2.5,0,4.5-2,4.5-4.5c0-1.5-0.7-2.9-1.9-3.7C20,4.8,17.6,6,15.4,7.4c0,0.1,0,0.2,0,0.3C15.4,10.2,17.4,12.2,19.9,12.2
	C19.9,12.2,19.9,12.2,19.9,12.2z"
    />
  </svg>
);

export default MushroomDots;
