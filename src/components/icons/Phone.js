import React from "react";

const Phone = ({ colors }) => (
  <svg
    id="icon-phoneHeart"
    width="64px"
    height="64px"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
  >
    <path
      d="M50.55 59.3a4.71 4.71 0 01-4.7 4.7h-27.7a4.71 4.71 0 01-4.7-4.7V4.7a4.71 4.71 0 014.7-4.7h27.7a4.71 4.71 0 014.7 4.7v54.6z"
      fill={colors.primary}
    />
    <path
      fill={colors.stroke}
      d="M45.85 2a2.7 2.7 0 012.7 2.7v54.6a2.7 2.7 0 01-2.7 2.7h-27.7a2.7 2.7 0 01-2.7-2.7V4.7a2.7 2.7 0 012.7-2.7h27.7m0-2h-27.7a4.71 4.71 0 00-4.7 4.7v54.6a4.71 4.71 0 004.7 4.7h27.7a4.71 4.71 0 004.7-4.7V4.7a4.71 4.71 0 00-4.7-4.7z"
    />
    <path fill={colors.tertiary} d="M14.45 10.03h35.1v44.33h-35.1z" />
    <path
      fill={colors.stroke}
      d="M48.55 11v42.36h-33.1V11h33.1m2-2h-37.1v46.36h37.1V9z"
    />
    <circle fill={colors.stroke} cx="32" cy="58.73" r="2.4" />
    <path
      d="M25.34 5.57h13.32"
      fill="none"
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M32 27.34A4.63 4.63 0 1140.47 31h0l-.08.11a4.71 4.71 0 01-.52.68L32 40l-7.88-8.19a4.68 4.68 0 01-.52-.68l-.08-.13h0A4.63 4.63 0 1132 27.34"
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M19 34.7V44m0 3.65v2.44"
      fill="none"
      stroke={colors.secondary}
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
    />
  </svg>
);

export default Phone;
