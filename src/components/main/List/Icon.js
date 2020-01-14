import React from "react";

import Cloud from "components/icons/Cloud";
import CoffeeToGo from "components/icons/CoffeToGo";
import DrinkStraw from "components/icons/DrinkStraw";
import FileTxt from "components/icons/FileTxt";
import Location from "components/icons/Location";
import Phone from "components/icons/Phone";

const Icon = ({ name, colors, iconSize, iconStroke }) => {
  const icons = {
    cloud: Cloud,
    coffeeToGo: CoffeeToGo,
    drinkStraw: DrinkStraw,
    fileTxt: FileTxt,
    location: Location,
    phoneHeart: Phone
  };

  const SvgIcon = icons[name];

  return (
    <SvgIcon colors={colors} iconSize={iconSize} iconStroke={iconStroke} />
  );
};

export default Icon;
