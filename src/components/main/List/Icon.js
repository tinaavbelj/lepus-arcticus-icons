import React from "react";

import AlarmClock from "components/icons/AlarmClock";
import Bottle from "components/icons/Bottle";
import Bowl from "components/icons/Bowl";
import Burger from "components/icons/Burger";
import Calendar from "components/icons/Calendar";
import Camera from "components/icons/Camera";
import Clock from "components/icons/Clock";
import Cloud from "components/icons/Cloud";
import CoffeeToGo from "components/icons/CoffeToGo";
import ComputerBasic from "components/icons/ComputerBasic";
import ComputerHeart from "components/icons/ComputerHeart";
import DrinkStraw from "components/icons/DrinkStraw";
import DrinkToGo from "components/icons/DrinkToGo";
import File from "components/icons/File";
import FileTxt from "components/icons/FileTxt";
import FoodCart from "components/icons/FoodCart";
import FrenchFries from "components/icons/FrenchFries";
import IceCream from "components/icons/IceCream";
import IceCreamBite from "components/icons/IceCreamBite";
import Leaf from "components/icons/Leaf";
import LeafOak from "components/icons/LeafOak";
import Letter from "components/icons/Letter";
import LetterHeart from "components/icons/LetterHeart";
import Location from "components/icons/Location";
import MapLocation from "components/icons/MapLocation";
import Mathematics from "components/icons/Mathematics";
import Message from "components/icons/Message";
import MessageTxt from "components/icons/MessageTxt";
import Moon from "components/icons/Moon";
import Muffin from "components/icons/Muffin";
import Mushroom from "components/icons/Mushroom";
import MushroomDots from "components/icons/MushroomDots";
import MusicNote from "components/icons/MusicNote";
import Notebook from "components/icons/Notebook";
import Palette from "components/icons/Palette";
import Pencil from "components/icons/Pencil";
import Phone from "components/icons/Phone";
import PhoneHeart from "components/icons/PhoneHeart";
import Plant from "components/icons/Plant";
import PlantTall from "components/icons/PlantTall";
import Popcorn from "components/icons/Popcorn";
import Search from "components/icons/Search";
import ShoppingBag from "components/icons/ShoppingBag";
import ShoppingBagDiscount from "components/icons/ShoppingBagDiscount";
import Sun from "components/icons/Sun";
import Tablet from "components/icons/Tablet";
import TabletHeart from "components/icons/TabletHeart";

const Icon = ({ name, colors, iconSize, iconStroke }) => {
  const icons = {
    alarmClock: AlarmClock,
    bottle: Bottle,
    bowl: Bowl,
    burger: Burger,
    calendar: Calendar,
    camera: Camera,
    clock: Clock,
    cloud: Cloud,
    coffeeToGo: CoffeeToGo,
    computerBasic: ComputerBasic,
    computerHeart: ComputerHeart,
    drinkStraw: DrinkStraw,
    drinkToGo: DrinkToGo,
    file: File,
    fileTxt: FileTxt,
    foodCart: FoodCart,
    frenchFries: FrenchFries,
    iceCream: IceCream,
    iceCreamBite: IceCreamBite,
    leaf: Leaf,
    leafOak: LeafOak,
    letter: Letter,
    letterHeart: LetterHeart,
    location: Location,
    mapLocation: MapLocation,
    mathematics: Mathematics,
    message: Message,
    messageTxt: MessageTxt,
    moon: Moon,
    muffin: Muffin,
    mushroom: Mushroom,
    mushroomDots: MushroomDots,
    musicNote: MusicNote,
    notebook: Notebook,
    palette: Palette,
    pencil: Pencil,
    phone: Phone,
    phoneHeart: PhoneHeart,
    plant: Plant,
    plantTall: PlantTall,
    popcorn: Popcorn,
    search: Search,
    shoppingBag: ShoppingBag,
    shoppingBagDiscount: ShoppingBagDiscount,
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
