import React from "react";

const Cloud = ({ colors, iconStroke }) => (
  <svg
    id="icon-cloud"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    x="0px"
    y="0px"
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
	M60.9,38.6c0-5.3-4.3-9.5-9.5-9.5c-0.4,0-0.8,0-1.2,0.1c-0.4-4.8-4.5-8.7-9.5-8.7c-2,0-3.9,0.6-5.4,1.7c-2.3-3.8-6.5-6.4-11.3-6.4
	c-7.3,0-13.2,5.9-13.2,13.2c0,0,0,0,0,0.1c-4.7,0.5-8.4,4.6-8.4,9.5c0,5.3,4.3,9.5,9.5,9.5h39.6l0,0C56.6,48.1,60.9,43.8,60.9,38.6z
	"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M15.2,29.1c0.9-4.1,4.1-7.3,8.2-8.3"
    />
  </svg>
);

export default Cloud;
