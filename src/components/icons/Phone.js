import React from "react";

const Phone = ({ colors, iconStroke }) => (
  <svg
    id="icon-phoneHeart"
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
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M31.3,27.5c0.5-1.8,2.2-3,4.1-3c2.3,0,4.2,1.9,4.2,4.2c0,0.8-0.2,1.5-0.6,2.1h0L38.9,31c-0.1,0.2-0.3,0.4-0.5,0.6l-7.2,7.5l-7.2-7.5
	c-0.2-0.2-0.3-0.4-0.5-0.6l-0.1-0.1h0c-0.4-0.6-0.6-1.4-0.6-2.1c0-2.3,1.9-4.2,4.2-4.2C29,24.5,30.7,25.7,31.3,27.5"
    />
  </svg>
);

export default Phone;
