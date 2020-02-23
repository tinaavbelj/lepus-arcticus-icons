import React from "react";

const Pencil = ({ colors, iconStroke }) => (
  <svg
    id="icon-pencil"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <g>
      <rect
        x="23.7"
        y="4.5"
        transform="matrix(0.7071 0.7071 -0.7071 0.7071 31.5068 -14.4455)"
        fill={colors.secondary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="18.9"
        height="52.6"
      />

      <polygon
        fill={colors.tertiary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="3,61 7.9,42.7 21.3,56.1"
      />

      <polygon
        fill={colors.primary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        points="4.8,54.2 3,61 9.8,59.2"
      />

      <rect
        x="29.9"
        y="4.5"
        transform="matrix(0.7071 0.7071 -0.7071 0.7071 31.5068 -14.4455)"
        fill={colors.tertiary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        width="6.5"
        height="52.6"
      />

      <path
        fill={colors.primary}
        stroke={colors.stroke}
        strokeWidth={iconStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M58.5,18.9c3.5-3.7,3.4-9.5-0.2-13.1c-3.6-3.6-9.4-3.7-13.1-0.2L58.5,18.9z"
      />
    </g>
  </svg>
);

export default Pencil;
