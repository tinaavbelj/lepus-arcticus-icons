import React from "react";

const TabletHeart = ({ colors, iconStroke }) => (
  <svg
    id="icon-tabletHeart"
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
	M10.4,2.7h42.4v58H10.4V2.7z"
    />
    <circle fill={colors.stroke} cx="31.6" cy="55.7" r="2.3" />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M10.4,2.7h42.4v48.1H10.4V2.7z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M30.2,24.8c0.6-1.9,2.3-3.3,4.3-3.3c2.5,0,4.5,2,4.5,4.5c0,0.8-0.2,1.6-0.6,2.3h0l-0.1,0.1c-0.1,0.2-0.3,0.5-0.5,0.7l-7.7,8l-7.7-8
	c-0.2-0.2-0.4-0.4-0.5-0.7l-0.1-0.1h0c-0.4-0.7-0.6-1.5-0.6-2.3c0-2.5,2-4.5,4.5-4.5C27.8,21.5,29.5,22.9,30.2,24.8"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M36.8,32.2c0.4-1.4,1.9-2.2,3.3-1.8c1.4,0.4,2.2,1.9,1.8,3.3c-0.1,0.2-0.2,0.4-0.3,0.6h0l0,0.1c-0.1,0.1-0.2,0.3-0.3,0.4l-4.5,4.7
	l-4.5-4.7c-0.1-0.1-0.2-0.3-0.3-0.4l0-0.1h0c-0.2-0.4-0.4-0.9-0.4-1.4c0-1.5,1.2-2.7,2.7-2.7C35.4,30.3,36.5,31,36.8,32.2"
    />
  </svg>
);

export default TabletHeart;
