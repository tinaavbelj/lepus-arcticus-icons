import React from "react";

const Leaf = ({ colors, iconStroke }) => (
  <svg
    id="icon-leaf"
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
	M32,53.4c0,0,15.3-8.5,15.3-21.7C47.3,18.6,32,2.1,32,2.1S16.7,18.6,16.7,31.7C16.7,44.9,32,53.4,32,53.4z M31.9,61.9V20.1 M32,16
	v-3.1"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M25.9,24.5l5.9,5.9l0.1,0l5.9-5.9 M25.9,35.9l5.9,5.9l0.1,0l5.9-5.9"
    />
  </svg>
);

export default Leaf;
