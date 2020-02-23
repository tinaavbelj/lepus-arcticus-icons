import React from "react";

const Muffin = ({ colors, iconStroke }) => (
  <svg
    id="icon-muffin"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	51.2,61 13.2,61 10.9,36.8 53.5,36.8 "
    />
    <rect
      x="25.4"
      y="36.8"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="13.7"
      height="24.2"
    />
    <circle
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="32"
      cy="8.6"
      r="5.6"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M52.3,25.3c-1.7-7.5-7.4-13.5-14.8-15.7c-0.5,2.6-2.8,4.6-5.5,4.6c-2.8,0-5.1-2.1-5.5-4.8c-7.7,2-13.8,8.2-15.6,16.1
	c-2.3,0.8-4,3-4,5.6c0,2.7,1.9,5,4.4,5.7h41.5c2.5-0.7,4.4-3,4.4-5.7C57.1,28.2,55,25.8,52.3,25.3z"
    />
  </svg>
);

export default Muffin;
