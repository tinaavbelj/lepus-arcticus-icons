import React from "react";

const File = ({ colors, iconStroke }) => (
  <svg
    id="icon-file"
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
  </svg>
);

export default File;
