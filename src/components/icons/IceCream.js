import React from "react";

const IceCream = ({ colors, iconStroke }) => (
  <svg
    id="icon-iceCream"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M32,3c-6.5,0-11.7,5.2-11.7,11.7v32.4h23.4V14.7C43.7,8.2,38.5,3,32,3z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M29.2,47.1v11c0,1.6,1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8v-11H29.2z"
    />
  </svg>
);

export default IceCream;
