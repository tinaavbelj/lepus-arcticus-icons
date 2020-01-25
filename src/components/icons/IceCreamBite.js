import React from "react";

const IceCreamBite = ({ colors, iconStroke }) => (
  <svg
    id="icon-iceCreamBite"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
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
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M42,12.2C38,12.2,34.8,9,34.8,5c0-0.6,0.1-1.1,0.2-1.6c-1-0.3-2-0.4-3-0.4c-6.5,0-11.7,5.2-11.7,11.7v32.4h23.4V14.7
	c0-0.9-0.1-1.8-0.3-2.6C42.9,12.1,42.5,12.2,42,12.2z"
    />
  </svg>
);

export default IceCreamBite;
