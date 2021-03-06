import React from "react";

const FoodCart = ({ colors, iconStroke }) => (
  <svg
    id="icon-foodCart"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <rect
      x="12.7"
      y="36.5"
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="38.1"
      height="21.3"
    />
    <circle
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="22.2"
      cy="57.1"
      r="4.9"
    />
    <circle
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      cx="40.9"
      cy="57.1"
      r="4.9"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M49.8,3L49.8,3h-6h-5.9H32H26h-5.9h-5.9h0L9.6,17.9c0,2.1,1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7c0,2.1,1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7
	c0,2.1,1.7,3.7,3.7,3.7s3.7-1.7,3.7-3.7c0,2.1,1.7,3.7,3.7,3.7c2.1,0,3.7-1.7,3.7-3.7c0,2.1,1.7,3.7,3.7,3.7c2.1,0,3.7-1.7,3.7-3.7
	c0,2.1,1.7,3.7,3.7,3.7c2.1,0,3.7-1.7,3.7-3.7L49.8,3z"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="15.4"
      y1="36.5"
      x2="15.4"
      y2="21.6"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="48.6"
      y1="36.5"
      x2="48.6"
      y2="21.6"
    />
  </svg>
);

export default FoodCart;
