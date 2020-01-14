import React from "react";

const Location = ({ colors, iconStroke }) => (
  <svg
    id="icon-location"
    width="64px"
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
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
		M32.2,2.5c10,0,18,8,18,18c0,9.1-4.4,18.2-10.5,24.7c-1.7,1.8-3.5,3.6-5.4,5.2c-0.7,0.6-1.4,1.3-2.1,1.8h-0.2
		c-0.7-0.6-1.4-1.2-2.1-1.8c-1.8-1.6-3.7-3.4-5.4-5.2c-6.1-6.5-10.5-15.7-10.5-24.7c0-10,8-18,18-18"
      />

      <path
        fill={colors.secondary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="
		M37.9,47c-1.2,1.2-2.4,2.3-3.7,3.4c-0.7,0.6-1.4,1.3-2.1,1.8h-0.2c-0.7-0.6-1.4-1.2-2.1-1.8c-1.3-1.1-2.5-2.2-3.7-3.4
		c-7,1-12,3.8-12,7.1c0,4.2,8,7.4,17.8,7.4s17.8-3.4,17.8-7.4C49.9,50.8,45,48,37.9,47z"
      />

      <path
        fill={colors.tertiary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="
		M39.6,19.7c0,4.2-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5C36.3,12.2,39.6,15.6,39.6,19.7z"
      />
    </g>
  </svg>
);

export default Location;
