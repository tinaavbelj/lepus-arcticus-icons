import React from "react";

const Calendar = ({ colors, iconStroke }) => (
  <svg
    id="icon-calendar"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <rect
      x="4.2"
      y="23.6"
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      width="54.8"
      height="37.6"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M16.6,3.3c-1.7,0-3.1,1.4-3.1,3.1v8.5v0c0,1.7,1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1v0V6.3C19.7,4.6,18.3,3.3,16.6,3.3z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M46.8,3.3c-1.7,0-3.1,1.4-3.1,3.1v8.5v0c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1v0V6.3C49.9,4.6,48.5,3.3,46.8,3.3z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M49.9,9.1v5.7v0c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1v0V9.1h-24v5.7v0c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1v0V9.1H4.2
	v14.5H59V9.1H49.9z"
    />
  </svg>
);

export default Calendar;
