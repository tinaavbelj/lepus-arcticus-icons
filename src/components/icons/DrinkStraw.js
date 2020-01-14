import React from "react";

const DrinkStraw = ({ colors }) => (
  <svg
    id="icon-drinkStraw"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <path
      d="M49.42,32.17L43.25,63H21L14.66,32.17h0c2.52-.36,5-0.73,7.57-1,4.38-.53,8,0.85,12.26,1,5.08,0.23,9.77-.65,14.92,0h0Z"
      fill={colors.primary}
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <polygon
      points="11.75 18 52.25 18 43.25 63 21 63 11.75 18"
      fill="none"
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
    <polyline
      points="48.25 4.75 34.75 1 32 56.25"
      fill="none"
      stroke={colors.stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  </svg>
);

export default DrinkStraw;
