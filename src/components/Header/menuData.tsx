import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 7,
    title: "Our Clients",
    path: "/our-clients",
    newTab: false,
  },
  {
    id: 3,
    title: "ContactUs",
    path: "/contact",
    newTab: false,
  },
  // New "Our Experts" menu item
  {
    id: 5,
    title: "Our Experts",
    path: "/our-experts",
    newTab: false,
  },
  {
    id: 6,
    title: "Our Services",
    path: "/servicespage",
    newTab: false,
  },
];

export default menuData;
