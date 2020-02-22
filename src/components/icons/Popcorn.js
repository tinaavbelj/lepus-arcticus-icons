import React from "react";

const Popcorn = ({ colors, iconStroke }) => (
  <svg
    id="icon-popcorn"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <polygon
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	46.9,61 17.3,61 14.9,22.3 49.3,22.3 "
    />
    <polygon
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      points="
	37,61 27.2,61 25.5,22.3 38.7,22.3 "
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M46.1,11.3c-0.5,0-1,0.1-1.5,0.2c-0.4-2.9-2.9-5.2-5.9-5.2c-0.6,0-1.2,0.1-1.7,0.3C36,4.4,33.9,3,31.5,3c-2.8,0-5.1,1.9-5.8,4.5
	C25,7.2,24.1,7,23.3,7c-2.7,0-5,1.8-5.7,4.3c-3.1,0.3-5.5,2.8-5.5,6c0,2.1,1.1,4,2.8,5.1l0,0h34.5l0,0c1.7-1.1,2.8-2.9,2.8-5.1
	C52.1,13.9,49.5,11.3,46.1,11.3z"
    />
  </svg>
);

export default Popcorn;
