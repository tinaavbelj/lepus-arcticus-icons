import React from "react";

const FileTxt = ({ colors, iconStroke }) => (
  <svg
    id="icon-fileTxt"
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
      points="42.1,2.9
	55.4,16.2 55.4,62 8.3,62 8.3,2.9 "
    />
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      points="55.4,16.5
	42.1,16.5 42.1,3.2 "
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      x1="17.4"
      y1="41.1"
      x2="46.3"
      y2="41.1"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      x1="17.4"
      y1="32.5"
      x2="46.3"
      y2="32.5"
    />
    <line
      fill="none"
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      x1="17.4"
      y1="50.2"
      x2="46.3"
      y2="50.2"
    />
  </svg>
);

export default FileTxt;
