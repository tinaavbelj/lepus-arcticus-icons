import React from "react";

const Tablet = ({ colors, iconStroke }) => (
  <svg
    id="icon-tablet"
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
  </svg>
);

export default Tablet;
