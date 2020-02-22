import React from "react";

const Burger = ({ colors, iconStroke }) => (
  <svg
    id="icon-burger"
    xmlns="http://www.w3.org/2000/svg"
    width="64px"
    height="64px"
    x="0px"
    y="0px"
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
	M57.3,34.9c0-14-11.4-25.4-25.4-25.4S6.6,21,6.6,34.9H57.3z"
    />
    <path
      fill={colors.tertiary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M55.7,54.4H8.3c-0.9,0-1.7-0.7-1.7-1.7l0-7.1c0-0.9,0.7-1.7,1.7-1.7h47.4c0.9,0,1.7,0.7,1.7,1.7l0,7.1
	C57.3,53.7,56.6,54.4,55.7,54.4z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="M59.7,43.9H4.2c-0.6,0-1.2-0.6-1.2-1.2v-6.5c0-0.6,0.6-1.2,1.2-1.2h55.6c0.6,0,1.2,0.6,1.2,1.2v6.5C60.9,43.4,60.4,43.9,59.7,43.9z"
    />
    <circle fill={colors.stroke} cx="18.9" cy="23.1" r="1.5" />
    <circle fill={colors.stroke} cx="26.3" cy="16.9" r="1.5" />
    <circle fill={colors.stroke} cx="31.1" cy="23.8" r="1.5" />
    <circle fill={colors.stroke} cx="37" cy="16.9" r="1.5" />
    <circle fill={colors.stroke} cx="44.7" cy="23.1" r="1.5" />
  </svg>
);

export default Burger;
