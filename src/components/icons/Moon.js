import React from "react";

const Moon = ({ colors, iconStroke }) => (
  <svg
    id="icon-moon"
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
      d="M56.8,50.3
	c-16,0-29-13-29-29c0-7.2,2.6-13.8,7-18.8C18.8,2.6,5.9,15.5,5.9,31.5c0,16,13,29,29,29c8.8,0,16.7-3.9,22-10.2
	C56.9,50.3,56.8,50.3,56.8,50.3z"
    />
  </svg>
);

export default Moon;
