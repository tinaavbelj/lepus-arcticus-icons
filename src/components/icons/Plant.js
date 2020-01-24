import React from "react";

const Plant = ({ colors, iconStroke }) => (
  <svg
    id="icon-plant"
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
	M17.1,41.8c-0.4,0-0.8-0.4-0.8-0.8c0,0,0,0,0,0v-8c0-0.4,0.4-0.8,0.8-0.8c0,0,0,0,0,0h29.3c0.4,0,0.8,0.4,0.8,0.8c0,0,0,0,0,0v8
	c0,0.4-0.4,0.8-0.8,0.8c0,0,0,0,0,0H17.1z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M22.1,61.2c-0.4,0-0.8-0.3-0.8-0.7l-2.4-17.8c-0.1-0.5,0.3-0.9,0.7-0.9c0,0,0.1,0,0.1,0h24.1c0.5,0,0.8,0.4,0.8,0.8c0,0,0,0.1,0,0.1
	l-2.4,17.8c-0.1,0.4-0.4,0.7-0.8,0.7H22.1z"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M31.4,18.2c0,0,5.3-4,5.2-8.1C36.5,5.9,31.4,2,31.4,2s-5.3,4.2-5.2,8.4C26.4,14.5,31.4,18.2,31.4,18.2z M37.8,25.9
	c0,0,6.5,1.1,9.5-1.8s1.8-9.5,1.8-9.5s-6.2-0.8-9.1,2.1C37,19.7,37.8,25.9,37.8,25.9z M25.7,26.1c0,0,0.7-6.7-2.2-9.6
	c-3-2.9-9-2.1-9-2.1s-1.2,6.6,1.8,9.5C19.2,26.8,25.7,26.1,25.7,26.1z"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M31.4,11v21.1 M43.5,20.3
	L31.4,32.1 M19.7,20l11.7,12.1"
    />
  </svg>
);

export default Plant;
