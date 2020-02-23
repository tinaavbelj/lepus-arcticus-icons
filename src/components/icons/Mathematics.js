import React from "react";

const Mathematics = ({ colors, iconStroke }) => (
  <svg
    id="icon-mathematics"
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
	M32,32H3V8c0-2.8,2.2-5,5-5h24V32z"
    />
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M61,32H32V3h24c2.8,0,5,2.2,5,5V32z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M32,61H8c-2.8,0-5-2.2-5-5V32h29V61z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M56,61H32V32h29v24C61,58.8,58.8,61,56,61z"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="12.2"
      y1="17.5"
      x2="22.8"
      y2="17.5"
    />
    <g>
      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="41.2"
        y1="17.5"
        x2="51.8"
        y2="17.5"
      />

      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="46.5"
        y1="12.2"
        x2="46.5"
        y2="22.8"
      />
    </g>
    <g>
      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="12.2"
        y1="43.7"
        x2="22.8"
        y2="43.7"
      />

      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="12.2"
        y1="49.3"
        x2="22.8"
        y2="49.3"
      />
    </g>
    <g>
      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="42.8"
        y1="42.8"
        x2="50.2"
        y2="50.2"
      />

      <line
        fill="none"
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        x1="50.2"
        y1="42.8"
        x2="42.8"
        y2="50.2"
      />
    </g>
  </svg>
);

export default Mathematics;