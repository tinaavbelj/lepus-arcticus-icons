import React from "react";

const LeafOak = ({ colors, iconStroke }) => (
  <svg
    id="icon-leafOak"
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
	M32,53c4.6,0,13.3,0.6,15.5-4.2c1.9-4.1-0.3-8.6-3.9-11c-8.2-5.5,2.8-6.1,2.8-13.2c0-6.6-8.2-4.5-6.7-9.2c0.9-2.7,0.9-5.7-1.1-8.9
	c-1.3-2.1-3.2-3.9-6.6-3.9c-3,0-5.3,1.8-6.6,3.9c-1.9,3.2-1.9,6.2-1.1,8.9c1.5,4.8-6.8,2.7-6.7,9.2c0,7.1,11,7.7,2.8,13.2
	c-3.6,2.4-5.8,6.9-3.9,11C18.7,53.6,27.4,53,32,53"
    />
    <path
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M32,19.9v41.6
	 M32,15.7v-3"
    />
    <path
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M26.2,25.2l5.8,5.8l0.1,0l5.8-5.8 M26.2,41.4l5.8,5.8l0.1,0l5.8-5.8"
    />
  </svg>
);

export default LeafOak;
