import React from "react";

const Graduation = ({ colors, iconStroke }) => (
  <svg
    id="icon-graduation"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
  >
    <polygon
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="57.4,27.8 30.2,39 3,27.8 30.2,16.5 "
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M30.2,39L10,30.6v8.2c0,1,0.5,2,1.3,2.7c2.9,2.4,10.3,6,19,6s16.1-3.6,19-6c0.8-0.7,1.3-1.6,1.3-2.7v-8.2L30.2,39z"
    />
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="61,42.6 53.8,42.6 55.5,36.5 59.2,36.5 "
    />
    <line
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="57.4"
      y1="27.8"
      x2="57.4"
      y2="36.5"
    />
  </svg>
);

export default Graduation;
