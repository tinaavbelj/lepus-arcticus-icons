import React from "react";

const DrinkToGo = ({ colors, iconStroke }) => (
  <svg
    id="icon-drinkToGo"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
  >
    <polygon
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	43.4,60.7 20.8,60.7 17.2,17.4 47,17.4 "
    />
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	47,17.4 17.2,17.4 18.4,13 45.8,13 "
    />
    <rect
      x="15.8"
      y="17.4"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="32.6"
      height="4.3"
    />
    <polyline
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	32.1,13 32.1,5 35.6,2.2 "
    />
    <rect
      x="23.9"
      y="21.7"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="5"
      height="39"
    />
    <rect
      x="35.1"
      y="21.7"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="5"
      height="39"
    />
  </svg>
);

export default DrinkToGo;
