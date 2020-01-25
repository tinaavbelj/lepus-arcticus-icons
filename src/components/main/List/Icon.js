import React from "react";

import Cloud from "components/icons/Cloud";
import CoffeeToGo from "components/icons/CoffeToGo";
import ComputerBasic from "components/icons/ComputerBasic";
import ComputerHeart from "components/icons/ComputerHeart";
import DrinkStraw from "components/icons/DrinkStraw";
import DrinkToGo from "components/icons/DrinkToGo";
import File from "components/icons/File";
import FileTxt from "components/icons/FileTxt";
import FrenchFries from "components/icons/FrenchFries";
import Leaf from "components/icons/Leaf";
import LeafOak from "components/icons/LeafOak";
import Location from "components/icons/Location";
import MapLocation from "components/icons/MapLocation";
import Mushroom from "components/icons/Mushroom";
import MushroomDots from "components/icons/MushroomDots";
import Palette from "components/icons/Palette";
import Phone from "components/icons/Phone";
import PhoneHeart from "components/icons/PhoneHeart";
import Plant from "components/icons/Plant";
import PlantTall from "components/icons/PlantTall";
import Tablet from "components/icons/Tablet";
import TabletHeart from "components/icons/TabletHeart";
import Sun from "components/icons/Sun";
import IceCream from "components/icons/IceCream";
import IceCreamBite from "components/icons/IceCreamBite";
import Search from "components/icons/Search";
import Message from "components/icons/Message";

const Icon = ({ name, colors, iconSize, iconStroke }) => {
  const icons = {
    cloud: Cloud,
    coffeeToGo: CoffeeToGo,
    computerBasic: ComputerBasic,
    computerHeart: ComputerHeart,
    drinkStraw: DrinkStraw,
    drinkToGo: DrinkToGo,
    file: File,
    fileTxt: FileTxt,
    frenchFries: FrenchFries,
    iceCream: IceCream,
    iceCreamBite: IceCreamBite,
    leaf: Leaf,
    leafOak: LeafOak,
    location: Location,
    mapLocation: MapLocation,
    message: Message,
    mushroom: Mushroom,
    mushroomDots: MushroomDots,
    palette: Palette,
    phone: Phone,
    phoneHeart: PhoneHeart,
    plant: Plant,
    plantTall: PlantTall,
    search: Search,
    sun: Sun,
    tablet: Tablet,
    tabletHeart: TabletHeart
  };

  const SvgIcon = icons[name];

  return (
    <SvgIcon colors={colors} iconSize={iconSize} iconStroke={iconStroke} />
  );
};

export default Icon;
