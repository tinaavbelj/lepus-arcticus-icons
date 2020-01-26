import React from "react";

const Message = ({ colors, iconStroke }) => (
  <svg
    id="icon-message"
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
	M53.8,3.9h-43c-4.4,0-8,3.6-8,8v25.5c0,4.4,3.6,8,8,8h2.5v15.6l15.6-15.6h24.9c4.4,0,8-3.6,8-8V11.9C61.8,7.5,58.2,3.9,53.8,3.9z"
    />
  </svg>
);

export default Message;
