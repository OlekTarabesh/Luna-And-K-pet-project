import { HeartIcon } from "./icons/heart-icon";
import { SearchIcon } from "./icons/search-icon";
import { ShoppingCartIcon } from "./icons/shopping-cart-icon";

export const header = {
    navigation: [
        {
            name: 'Catalog',
            icon: <SearchIcon />
        },
        {
            name: 'About',
            icon: <ShoppingCartIcon />
        },
        {
            name: 'Delivery',
            icon: <HeartIcon />
        },
        {
            name: 'Contacts',
        },

    ]
}
