import React from "react";

const PlantTall = ({ colors, iconStroke }) => (
  <svg
    id="icon-plantTall"
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
	M18.2,43.4c-0.4,0-0.7-0.3-0.7-0.7c0,0,0,0,0,0v-7.6c0-0.4,0.3-0.7,0.7-0.7c0,0,0,0,0,0h27.6c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0v7.6
	c0,0.4-0.3,0.7-0.7,0.7c0,0,0,0,0,0H18.2z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M22.9,61.7c-0.4,0-0.7-0.3-0.8-0.7l-2.3-16.8c-0.1-0.4,0.2-0.8,0.7-0.9c0,0,0.1,0,0.1,0h22.7c0.4,0,0.8,0.3,0.8,0.8c0,0,0,0.1,0,0.1
	L41.9,61c-0.1,0.4-0.4,0.7-0.8,0.7H22.9z"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M31.9,11.5v22.1 M31.8,11.5c0,0,3-2.1,3-4.4s-3-4.4-3-4.4s-2.7,2.1-2.7,4.4S31.8,11.5,31.8,11.5z M32.2,19.4c0,0,3.4,1.3,5.3,0.1
	c1.9-1.3,2-4.9,2-4.9s-3.2-1.1-5.2,0.1C32.5,16,32.2,19.4,32.2,19.4z M31.9,19.4c0,0-3.4,1.3-5.3,0.1c-1.9-1.3-2-4.9-2-4.9
	s3.2-1.1,5.2,0.1C31.7,16,31.9,19.4,31.9,19.4z M32.1,29.8c0,0,3.4,1.3,5.3,0.1c1.9-1.3,2-4.9,2-4.9s-3.2-1.1-5.2,0.1
	C32.3,26.4,32.1,29.8,32.1,29.8z M31.8,29.8c0,0-3.4,1.3-5.3,0.1c-1.9-1.3-2-4.9-2-4.9s3.2-1.1,5.2,0.1
	C31.5,26.4,31.8,29.8,31.8,29.8z"
    />
  </svg>
);

export default PlantTall;
