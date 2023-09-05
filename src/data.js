import { HeartIcon } from "./icons/heart-icon";
import { SearchIcon } from "./icons/search-icon";
import { ShoppingCartIcon } from "./icons/shopping-cart-icon";

export const header = {
  navigation: [
    {
      name: "catalog",
      icon: <SearchIcon />,
    },
    {
      name: "about",
      icon: <ShoppingCartIcon />,
    },
    {
      name: "delivery",
      icon: <HeartIcon />,
    },
    {
      name: "contacts",
    },
  ],
};
