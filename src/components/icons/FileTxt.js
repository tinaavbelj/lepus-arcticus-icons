import React from "react";

const FileTxt = ({ colors }) => (
  <svg
    id="icon-fileTxt"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <polygon
      points="42.73 1 56.69 14.96 56.69 63 7.31 63 7.31 1 42.73 1"
      fill={colors.tertiary}
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.3"
    />
    <polygon
      points="56.69 15.22 42.73 15.22 42.73 1.27 56.69 15.22"
      fill={colors.primary}
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.3"
    />
    <line
      x1="16.84"
      y1="41.07"
      x2="47.16"
      y2="41.07"
      fill="none"
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.3"
    />
    <line
      x1="16.84"
      y1="32"
      x2="47.16"
      y2="32"
      fill="none"
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.3"
    />
    <line
      x1="16.84"
      y1="50.65"
      x2="47.16"
      y2="50.65"
      fill="none"
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.3"
    />
  </svg>
);

export default FileTxt;
