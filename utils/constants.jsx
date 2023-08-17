import React from "react";
import { GiBackpack } from "react-icons/gi";
import { PiShootingStar } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 3,
    text: "search",
    url: "/search",
  },
  {
    id: 2,
    text: "profile",
    url: "/profile",
  },
];

export const tempUser = {
  name: "jesse",
};

export const tempDiscs = [
  {
    name: "Firebird",
    id: 1,
    speed: 9,
    glide: 3,
    turn: 0,
    fade: 4,
    links: "https://infinitediscs.com/Innova-Firebird",
    manufacturer: "Innova",
    img: "https://infinitediscs.com/Inf_Uploads/DiscProducts/Firebird.Webp",
  },
  {
    name: "Wraith",
    id: 2,
    speed: 11,
    glide: 5,
    turn: -1,
    fade: 3,
    links: "https://infinitediscs.com/Innova-Wraith",
    manufacturer: "Innova",
    img: "https://infinitediscs.com/Inf_Uploads/DiscProducts/Wraith.Webp",
  },
  {
    name: "Element",
    id: 3,
    speed: 5,
    glide: 5,
    turn: -2,
    fade: 1,
    links: "https://infinitediscs.com/Gateway-Element",
    manufacturer: "Gateway",
    img: "https://infinitediscs.com/Inf_Uploads/DiscProducts/Element.Webp",
  },
];

export const profileFeatures = [
  {
    id: 2,
    icon: <AiOutlineUser />,
    title: "Profile",
    text: "Create a profile.",
  },
  {
    id: 1,
    icon: <GiBackpack />,
    title: "In The Bag",
    text: "Share the contents of your bag with other users.",
  },
  {
    id: 3,
    icon: <PiShootingStar />,
    title: "Wishlist",
    text: "Keep track of the discs you're interested in trying someday.",
  },
];
