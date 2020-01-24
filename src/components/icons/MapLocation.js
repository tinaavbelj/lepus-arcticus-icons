import React from "react";

const MapLocation = ({ colors, iconStroke }) => (
  <svg
    id="icon-mapLocation"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <polygon
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	62,48.1 2,48.1 9.6,28.1 54.4,28.1 "
    />
    <polygon
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	46.9,48.1 17.1,48.1 20.9,28.1 43.1,28.1 "
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="32"
      y1="28.1"
      x2="32"
      y2="48.1"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="7.3"
      y1="34.4"
      x2="56.7"
      y2="34.4"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="4.7"
      y1="41"
      x2="59.3"
      y2="41"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M19.6,10.1L19.6,10.1c-4.9,0-8.9,3.9-8.9,8.8c0,4.4,2.2,8.9,5.2,12.1c0.8,0.9,1.7,1.7,2.6,2.5c0.3,0.3,0.7,0.6,1,0.9h0.1
	c0.3-0.3,0.7-0.6,1-0.9c0.9-0.8,1.8-1.6,2.6-2.5c3-3.2,5.1-7.6,5.1-12.1C28.4,14,24.4,10.1,19.6,10.1z M19.5,22.2
	c-2,0-3.7-1.6-3.7-3.7c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.7,3.7,3.7C23.2,20.5,21.6,22.2,19.5,22.2z"
    />
  </svg>
);

export default MapLocation;
