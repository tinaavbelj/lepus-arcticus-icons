import React from "react";

const CoffeToGo = ({ colors, iconStroke }) => (
  <svg
    id="icon-coffeeToGo"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M44.8,61H19.1L15,13
	h33.9L44.8,61z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M45.9,46.8l1.8-22.4
	H15.9l1.8,22.4H45.9z"
    />
    <circle
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      cx="31.9"
      cy="35.6"
      r="6.8"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M49,8.3H15.1l1.4-5.6
	h31.1L49,8.3z M14,8.3h35.7V13H14V8.3z"
    />
  </svg>
);

export default CoffeToGo;
