import React from "react";

const Phone = ({ colors, iconStroke }) => (
  <svg
    id="icon-phone"
    width="64px"
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.primary}
      d="M48.2,56.7c0,2.4-1.9,4.3-4.3,4.3H18.6c-2.4,0-4.3-1.9-4.3-4.3V6.8c0-2.4,1.9-4.3,4.3-4.3h25.3
	c2.4,0,4.3,1.9,4.3,4.3V56.7z"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M48.2,56.7c0,2.4-1.9,4.3-4.3,4.3H18.6c-2.4,0-4.3-1.9-4.3-4.3V6.8c0-2.4,1.9-4.3,4.3-4.3h25.3c2.4,0,4.3,1.9,4.3,4.3V56.7z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M14.3,10.8h33.9v42.3H14.3V10.8z"
    />
    <circle fill={colors.stroke} cx="31.3" cy="57.1" r="2.2" />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M25.2,6.7h12.2"
    />
  </svg>
);

export default Phone;
