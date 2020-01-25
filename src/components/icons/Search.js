import React from "react";

const Search = ({ colors, iconStroke }) => (
  <svg
    id="icon-search"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
  >
    <path
      fill={colors.primary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M25.9,3C13.3,3,3.1,13.2,3.1,25.8c0,12.6,10.2,22.8,22.8,22.8c12.6,0,22.8-10.2,22.8-22.8C48.7,13.2,38.5,3,25.9,3z M25.9,41
	c-8.4,0-15.2-6.8-15.2-15.2c0-8.4,6.8-15.2,15.2-15.2c8.4,0,15.2,6.8,15.2,15.2C41.1,34.2,34.3,41,25.9,41z"
    />
    <path
      fill={colors.secondary}
      stroke={colors.stroke}
      strokeWidth={iconStroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      d="
	M59.5,52.7L59.5,52.7L45,38.2c-1.8,2.8-4.2,5.1-6.9,6.9l14.5,14.5c1.9,1.9,5,1.9,6.9,0C61.4,57.7,61.4,54.6,59.5,52.7z"
    />
  </svg>
);

export default Search;
