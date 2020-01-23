import React from "react";

const DrinkStraw = ({ colors, iconStroke }) => (
  <svg
    id="icon-drinkStraw"
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
      d="M47.3,31.9L41.5,61h-21
	l-6-29.1l0,0c2.4-0.3,4.7-0.7,7.2-0.9c4.1-0.5,7.6,0.8,11.6,0.9C38,32.1,42.5,31.3,47.3,31.9L47.3,31.9L47.3,31.9z"
    />
    <polygon
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      points="11.8,18.5 50,18.5
	41.5,61 20.5,61 "
    />
    <polyline
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      points="46.2,6 33.5,2.4
	30.9,54.6 "
    />
  </svg>
);

export default DrinkStraw;
