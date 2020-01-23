import React from "react";

const CoffeToGo = ({ colors }) => (
  <svg
    id="icon-coffeeToGo"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.77,63H18.38L14.05,12h36Z"
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M47.17,48l1.9-24h-34L17,48H47.17Z"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <circle
      cx="32.08"
      cy="35.96"
      r="7.21"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M50.17,7h-36l1.44-6H48.73ZM13,7H51v5H13V7Z"
      fill={colors.primary}
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export default CoffeToGo;
