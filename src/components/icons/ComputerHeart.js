import React from "react";

const ComputerHeart = ({ colors, iconStroke }) => (
  <svg
    id="icon-computerHeart"
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
	M2.7,11.6H60v38H2.7V11.6z"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M15.5,55h31.8"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M20.8,49.6h21.1v5.2H20.8V49.6z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M2.7,11.6H60v32.3H2.7V11.6z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M31.4,23.5c0.5-1.8,2.2-3,4.1-3c2.3,0,4.2,1.9,4.2,4.2c0,0.8-0.2,1.5-0.6,2.1h0l-0.1,0.1c-0.1,0.2-0.3,0.4-0.5,0.6L31.4,35l-7.2-7.5
	c-0.2-0.2-0.3-0.4-0.5-0.6l-0.1-0.1h0c-0.4-0.6-0.6-1.4-0.6-2.1c0-2.3,1.9-4.2,4.2-4.2C29.2,20.5,30.8,21.7,31.4,23.5"
    />
  </svg>
);

export default ComputerHeart;
