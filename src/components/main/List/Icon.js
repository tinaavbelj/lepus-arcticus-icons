import React from "react";

import Calendar from "components/icons/Calendar";
import Cloud from "components/icons/Cloud";
import CoffeeToGo from "components/icons/CoffeToGo";
import ComputerBasic from "components/icons/ComputerBasic";
import ComputerHeart from "components/icons/ComputerHeart";
import DrinkStraw from "components/icons/DrinkStraw";
import DrinkToGo from "components/icons/DrinkToGo";
import File from "components/icons/File";
import FileTxt from "components/icons/FileTxt";
import FrenchFries from "components/icons/FrenchFries";
import IceCream from "components/icons/IceCream";
import IceCreamBite from "components/icons/IceCreamBite";
import Leaf from "components/icons/Leaf";
import LeafOak from "components/icons/LeafOak";
import Letter from "components/icons/Letter";
import LetterHeart from "components/icons/LetterHeart";
import Location from "components/icons/Location";
import MapLocation from "components/icons/MapLocation";
import Message from "components/icons/Message";
import MessageTxt from "components/icons/MessageTxt";
import Mushroom from "components/icons/Mushroom";
import MushroomDots from "components/icons/MushroomDots";
import Palette from "components/icons/Palette";
import Phone from "components/icons/Phone";
import PhoneHeart from "components/icons/PhoneHeart";
import Plant from "components/icons/Plant";
import PlantTall from "components/icons/PlantTall";
import Search from "components/icons/Search";
import Sun from "components/icons/Sun";
import Tablet from "components/icons/Tablet";
import TabletHeart from "components/icons/TabletHeart";

const Icon = ({ name, colors, iconSize, iconStroke }) => {
  const icons = {
    calendar: Calendar,
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
    letter: Letter,
    letterHeart: LetterHeart,
    location: Location,
    mapLocation: MapLocation,
    message: Message,
    messageTxt: MessageTxt,
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
